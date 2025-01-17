---
title: "Smarter Forms" 
sidebar_label: "3. Smarter Forms"
hide_table_of_contents: true
---
## Purpose

Amandas team is growing and so is the backlog for what the requestors would like in the Telework Case management application.
There are two things that need to be addressed:

First of all, Amanda needs to be able to allow anyone on her team to work on a telework case but right now, not everyone knows what to do when they log in - what should they look for?  How does the process progress?  For this issue, Amanda would like to implement 'Playbooks' into the workspace to guide the fulfillers through the process.

The second backlog item they need to implement is having the requestor double check who their manager is.  Right now, if there's no manager on the sys_user table, then the workflow stops and Amanda has to correct the issue.  To mitigate this, Amanda would like to add a 'Manager' question for verification on the record producer and have it auto-populate with the manager on file for ease of use.

In this section of the lab, we'll be using Process Automation Designer, UI Builder, and Dev Studio.
 