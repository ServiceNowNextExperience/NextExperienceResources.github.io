---
title: "Create People Finder Spoke" 
sidebar_label: "1. Create People Finder Spoke"
hide_table_of_contents: false
---
# Create People Finder Spoke

A spoke is a scoped application containing Flow Designer content dedicated to a particular application or record type. This includes integrations that connect external systems or services with the ServiceNow platform. By leveraging spokes, organizations can extend the capabilities of their ServiceNow instance and integrate it with a wide range of external tools and services, enhancing automation, collaboration, and efficiency across their IT operations and business processes.

[Click here to learn more about Spokes.](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/flow-designer/concept/spokes.html)

Spoke Generator allows users to create custom spokes for integrating ServiceNow with external systems or services. It provides a graphical interface and a set of tools to streamline the process of building, configuring, and deploying spokes tailored to specific integration scenarios.

[Click here to learn more about Spoke Generator.](https://docs.servicenow.com/bundle/vancouver-build-workflows/page/administer/flow-designer/concept/spoke-builder.html)

We will create a re-usble integration to the finance department's People Finder Open API, so that we can access this data in our Main flow.

## Open Flow Designer to use Spoke Generator to create the People Finder Integration

1. Go to the tab with the ServiceNow Admin Home Page (your title may be different).  
![](./images/04-1-return-to-admin-page.png)

2. Open Flow Desginer from the All Menu

   >1. Click the **All** menu
    
   >2. Search for "flow designer" 
    
   >3. Click on: Process Automation > Flow Designer  
![](./images/04-2-flow-designer.png)

3. Create New Spoke

   >1. Click <span className="button-purple">Create new ▼</span>

   >2. Click "Spoke"  
![](./images//04-3-create-spoke.png)

4. Setup General Information for the Spoke (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Drag and drop the icon in the telework_lab files folder we downloaded earlier | people_finder.png
   |<span className="large-number">➋</span>|Spoke Name (App scope name will auto-populate) | People Finder
   |<span className="large-number">➌</span>|Description | API to find people in a remote system
   |<span className="large-number">➍</span>|Click on the <span className="button-purple">Create and continue</span> button.  
![](./images/04-4-spoke-general-info.png)

5. Specify how we want to build our Spoke

   >1. Select OpenAPI Specification

   >2. Click <span className="button-purple">Continue</span>
![](./images/04-5-how-build-spoke.png)

6. For the OpenAPI source, click <span className="button-white-grey-border">Import new</span>  
![](./images/04-6-openapi-import-new.png)

7. Fill the user form with the following values (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Import method    | Import from URL
   |<span className="large-number">➋</span>|OpenAPI URL | https://low-code.guide/api-specs.json
   |<span className="large-number">➌</span>|Click on the <span className="button-purple">Import</span> button.  
![](./images/04-7-import-new-openapi.png)

8. For the Connection alias, click <span className="button-white-grey-border">Create new</span>  
![](./images/04-8-connection-alias-create-new.png)

9. Fill the user form with the following values (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Connection alias name | People Finder
   |<span className="large-number">➋</span>|Authentication Configuration Template | API Key Template
   |<span className="large-number">➌</span>|Click on the <span className="button-purple">Create</span> button.  
![](./images/04-9-create-new-connection-alias.png)

10. To continue, click the <span className="button-purple">Generate operations</span> button  
![](./images/04-10-generate-operations.png)

11. Select the actions you want to create

   >1. Select all actions

   >2. Click the <span className="button-purple">Publish(1) | ▼</span> button  
![](./images/04-11-actions-to-create.png)

12. Click the "GET /user" link to view the action we just created  
![](./images/04-12-get-user-action.png)

13. Before we can test and use our spoke, we need to set the Base URL for the Connection.

   >Click to expand the OpenAPI step  
![](./images/04-13-expand-openapi-step.png)

14. Click the plus sign next to the Connection Alias  
![](./images/04-14-connection-alias.png)

15. Set up the HTTPs(s) Connection (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|Name | People Finder
   |<span className="large-number">➋</span>|Connection alias | x_snc_people_finde.People_Finder
   |<span className="large-number">➌</span>|Connection URL | https://low-code.guide/api
   |<span className="large-number">➍</span>|Click on the <span className="button-white-purple-border-square">Submit</span> button.  
![](./images/04-15-https-connection.png)

16. The Base URL should now be populated.

   >Click on the <span className="button-white-black-border-black">Test</span> button  
![](./images/04-16-test-action.png)

17. Test the action with David Loo's email (💡 double-click to select, copy & paste into the form).

   | |Field Name                | Field Value
   |-|--------------------------| --------------
   |<span className="large-number">➊</span>|email | david.loo@example.com
   |<span className="large-number">➋</span>|Click on the <span className="button-purple">Run Test</span> button.  
![](./images/04-17-test-actio-modal.png)

18. When the test completes, click the link to view the execution results  
![](./images/04-18-test-action-complete.png)

19. Click on the RUNTIME VALUE link  
![](./images/04-19-test-output.png)

20. Review the JSON results. We can switch to the Formatted view.

   >Click <span className="button-white-purple-border">Formatted</span> toggle.
![](./images/04-20-action-json-new.png)

21. Expand the output.
![](./images/04-21-expand-output.png)

22. Review the Formatted JSON results.

   > 1. Note the <b>telework-certified</b> value.

   > 2. Click <span className="button-white-purple-border">Close</span>
   ![](./images/04-22-formatted-json.png)

23. Close the Execution Details tab  
![](./images/04-21-close-execution-details.png)

24. Close the Test Action model by clicking the <span className="button-white-purple-border">Cancel</span> button  
![](./images/04-22-close-test-action.png)

25. Save the GET /user spoke action

   >Click the <span className="button-purple">Save</span> button  
![](./images/04-23-save-action.png)

26. Now, we publish the spoke, so it will be available to call from our Main Flow.

   >Click the <span className="button-white-purple-border">Publish</span> button  
![](./images/04-24-publish-action.png)

27. Confirm publication of the action

   >Click the <span className="button-purple">Publish</span> button   
![](./images/04-25-confirm-publish-action.png)

## Bonus: Explore Spoke Generator More

Open a new browser tab or window and explore the following:
https://developer.opentext.com/imservices/products/contentstorageservice/apis/contentstorage

On your own, create a new spoke using the following OpenAPI spec:
https://raw.githubusercontent.com/deflant/opentext-content-storage-swagger/main/opentext-content-storage-swagger.yaml