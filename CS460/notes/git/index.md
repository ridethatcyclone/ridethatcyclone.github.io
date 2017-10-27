---
title: "Git Notes"
layout: default
---

### Creating a repository
The easiest way to do this (in my opinion) is to create a repository on Github or Bitbucket and clone it to your machine. To do this you must have something in the repository first, so it works best to initialize it with a README file.
```
cd DestinationFolder
git clone http://github.com/ridethatcyclone/repo.git
cd repo
```

### Working with the repository
```
git pull origin master
git status
git status -uall --untracked
git add *
git reset
git add index.HTML
git commit -m "Commit message"
git push -u origin master
```

### Branching
```
git branch newBranch
git checkout newBranch
    ## Alternatively, do it all on one line
git checkout -b newBranch
```
