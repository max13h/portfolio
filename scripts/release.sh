#!/bin/sh
set -e

BUMP=${1:-patch}

case $BUMP in
  major|minor|patch) ;;
  *)
    echo "Usage: pnpm release <major|minor|patch>"
    exit 1
    ;;
esac

if [ -n "$(git status --porcelain)" ]; then
  echo "Error: uncommitted changes — commit or stash them first"
  exit 1
fi

pnpm version --no-git-tag-version "$BUMP"
VERSION=$(node -p "require('./package.json').version")

git add package.json
git commit --no-verify -m "chore(release): $VERSION"
git tag "$VERSION"
git push origin main $VERSION
