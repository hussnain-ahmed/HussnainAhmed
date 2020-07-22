# Tasks we performed today 									
1.	Creating the repository by using the **curl** command from terminal:
	>curl -u "your-user-name" https://api.github.com/user/repos -d '{"name": "name-of-the-repository", "private/public": true/false}'
2.	Creating branches within the master branch by using the following command:
	> git checkout -b BranchName
	- to view all the existing branches:
		> git branch -r
	
3.	Using **Pull** command to get the updates from your github repository to your local repository.
	> git pull origin master/BranchName
4.	Using **Push** command to upload your changes from your local repository to your github repository.
	> git push origin master/BranchName
5.	Then we solved the problem regarding uploading a empty directory.