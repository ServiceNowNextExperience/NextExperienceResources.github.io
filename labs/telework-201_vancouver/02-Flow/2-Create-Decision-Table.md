---
title: "Create Decision Table" 
sidebar_label: "2. Create Decision Table"
hide_table_of_contents: false
---
# Create Decision Table for Auto Approval Conditions

A Decision Table allows users to define complex business rules and decision logic using a tabular format. Decision tables are particularly useful for automating decision-making processes within workflows, approvals, or other business processes.

[Click here to learn more about Decision Tables.](https://docs.servicenow.com/bundle/vancouver-application-development/page/administer/decision-table/concept/decision-designer-overview.html)

We will create a decision table to assess the arrangement type and numbers of days and return an auto-approval result that we can access in our Main flow.

## Return to App Engine Studio to Build the Decision Table

1. Go to the tab with the App Engine Studio.  
![](./images/04-02-01-returntoaes.png)

2. Click on "Logic and Automation (1)".  
![](./images/04-02-02-logicandautomation.png)

3. Click the <span className="button-white-purple-border">+Add</span> button.  
![](./images/04-02-03-addlogicandautomation.png)

4. Select the Decision tile.  
![](./images/04-02-04-selectdecision.png)

5. Click the <span className="button-purple">Begin</span> button.  
![](./images/04-02-05-beginlogicandautomation.png)

6. Set up your decision table.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Name | Telework Auto Approval
   |<span className="large-number">➋</span>|Accessible from | This application scope only
   |<span className="large-number">➌</span>|Click on the <span className="button-purple">Continue</span> button.  
![](./images/04-02-06-setupdecisiontable.png)

7. Click the <span className="button-white-grey-border">Edit Decision Table</span> button.  
![](./images/04-02-07-editdecisiontable.png)

8. Click the <span className="text-purple-bold">⨁ Add</span> button next to Inputs.  
![](./images/04-02-08-addinputs.png)

9. Populate the following:

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Label | Telework Case
   |<span className="large-number">➋</span>|Type | Reference
   |<span className="large-number">➌</span>|Table | Telework Case  
![](./images/04-02-09-populateinputs.png)

10.  On the Input row you just created, click <span className="button-white-purple-border">Add condition column</span>.  
![](./images/04-02-12-addconditioncolumn.png)

11. Populate the NEW CONDITION COLUMN form.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Condition Column Label | Arrangement
   |<span className="large-number">➋</span>|Description | Type of Arrangement
   |<span className="large-number">❸</span>|Data to Evaluate | Field
   |<span className="large-number">❹</span>|Field | Telework Case.arrangement
   |<span className="large-number">❺</span>|Default operator | is
   |<span className="large-number">❻</span>|Click on the <span className="button-purple">Done</span> button.  
![](./images/04-02-13-newconditioncolumnform.png)

12. Add another condition column.

   >1. Click the plus button ⨁ next the condition we just created.

   >2. Select "Add condition column".  
![](./images/04-02-14-addconditioncolumn.png)

13. Populate the NEW CONDITION COLUMN form.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Condition Column Label | Days per Week
   |<span className="large-number">➋</span>|Description | Days per Week
   |<span className="large-number">❸</span>|Input | Telework Request
   |<span className="large-number">❹</span>|Data to Evaluate | Field
   |<span className="large-number">❺</span>|Field | Telework Case.days_per_week
   |<span className="large-number">❻</span>|Default operator | less than or is
   |<span className="large-number">❼</span>|Click on the <span className="button-purple">Done</span> button.  
![](./images/04-02-15-newconditioncolumnform.png)

14. In the results column, click <span className="text-black-bold-lgrey">⨁ Add result column</span>.  
![](./images/04-02-16-addresultcolumn.png)

15. Populate the NEW RESULT COLUMN form.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Result Column Label | Auto Approved
   |<span className="large-number">➋</span>|Description | Is telework auto approved
   |<span className="large-number">❸</span>|Result Type | True/False
   |<span className="large-number">❹</span>|Click on the <span className="button-purple">Done</span> button.  
![](./images/04-02-17-newresultcolumnform.png)

16. Let's define our first decision row, by clicking into row 1.  
![](./images/04-02-18-definedecisionrow.png)

17. Populate the Arrangement Condition.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Operator | is
   |<span className="large-number">➋</span>|Value | Situational Telework  
![](./images/04-02-19-populatearrangementcondition.png)

18. Populate the Number of Days Condition.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Operator | less than or is
   |<span className="large-number">➋</span>|Value | 3
   |<span className="large-number">❸</span>|Click on the value in the Auto Approved column (currently false).  
![](./images/04-02-20-populatnumdayscondition.png)

19. Change the result for Auto Approval to true.

   >1. Switch the result to true.

   >2. Click the <span className="button-white-purple-border">OK</span> button to continue.  
![](./images/04-02-21-populateresult.png)

20. Let's add our next decision row by clicking <span className="text-purple-bold">⨁ Add new deicion row</span>  
![](./images/04-02-22-addnewdecisionrow.png)

21. Populate the Arrangement Condition.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Operator | is
   |<span className="large-number">➋</span>|Value | Situational Telework  
![](./images/04-02-23-populatearrangementcondition.png)

22. Populate the Number of Days Condition.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Operator | greater than
   |<span className="large-number">➋</span>|Value | 3  
![](./images/04-02-24-populatenumdayscondition.png)

23. Let's add another decision row by clicking <span className="text-purple-bold">⨁ Add new deicion row</span> 
![](./images/04-02-25-addnewdecisionrow.png)

24. Populate the Arrangement Condition.

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Operator | is not
   |<span className="large-number">➋</span>|Value | Situational Telework  
![](./images/04-02-26-populatearrangementcondition.png)

25. Let's save our work by clikcing the <span className="button-purple">Save</span> button.  
![](./images/04-02-27-savedecision.png)

## Bonus

Test diffent scenarios before modifying the Main Flow.





