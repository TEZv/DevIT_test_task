## We have these branches:
| dev (root/parent)<br>
|<br>
| -- task_4 (child/current working on)<br>


`So, the task is`:
New changes have appeared on the 'dev' branch of the remote repository, and your task is to add them to your branch before yours changes. Describe the sequence of your actions.

`Provided answer`:
1. Fetch changes from the remote repository:<br>
   --> **git fetch origin dev**
2. Switch to my local task_4 branch:<br>
   --> **git checkout task_4**
3. Merge changes from the remote dev branch into my local task_4 branch:<br>
   --> **git merge origin/dev**
4. Resolve any merge conflicts if they occur. Git will indicate if there are any conflicts, and I'll need to manually resolve them in my files - accept current, remote or both of them.
5. Once conflicts are resolved, add the resolved files to the staging area:<br>
   --> **git add <resolved files>**
6. Commit the merged changes:<br>
   --> **git commit -m "Merge changes from dev into task_4"**
7. Push the merged changes to my remote repository:<br>
   --> **git push origin task_4**
