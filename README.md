### mern-stack-course 
## Branch Name: <span style="color: blue;">burn</span>
### I have made this to practice on rohit's code

### Necessary Git commands
- Move to burn. Play around then commit push.
- New day. New content. Move to main. Fetch from upstream. Merge from upstream/main.
- Now move to burn. Now merge contents from main.
- Practice, commit, push.
- Repeat

```
# Clone your fork (not the original course repo)
git clone <your-fork-url>
cd <repo-name>

# Add the course repo as "upstream" to fetch updates
git remote add upstream <course-repo-url>
```

```
git checkout main                # switch to main
git pull upstream main           # get new course updates
git push origin main             # sync them to your fork
```

```
git checkout -b my-work           # create & switch to a new branch
git add .                         # stage all changes
git commit -m "My Day 2 practice" # commit with a message
git push origin my-work           # push branch to your GitHub
```

```
git checkout my-work
git merge main                    # merge latest main into your branch
# OR (alternative, cleaner history)
git rebase main
```

```
git status                        # see what’s changed
git log --oneline --graph --all   # view commit history with branches
git branch                        # list branches
git checkout <branch>             # switch branches
git branch -d <branch>            # delete a local branch
git push origin --delete <branch> # delete branch from GitHub
git diff                          # see unstaged changes
git stash                         # temporarily save changes without committing
git stash pop                     # bring back stashed changes
```

