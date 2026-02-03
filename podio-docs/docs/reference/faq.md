# Podio FAQ - Common Questions

## Getting Started

### How do I create a new project?
1. Open the **Projects** app
2. Click **"+ Add"**
3. Fill in required fields (Job #, Job Name, Division, PM, OC, FOCS)
4. Click **Save**
5. Wait 2-3 minutes - Podio will automatically create the 5 stages and link them to your project

**See also:** PSP-101: Creating a New Project

---

### Why aren't my stages showing up after I created a project?
Give it 2-3 minutes. An automation (GlobiFlow) creates the stages in the background. Refresh your browser if they still don't appear after 5 minutes. If still missing, contact your OC—the automation might have failed.

---

### How do I know which stage my project is in?
Open the project and look at the **"Current Stage Status"** field. It will say something like "Construction Active" or "Pre-Construction Active".

---

## Working with Tasks

### How do I find my tasks?
**Option 1:** Open the **Tasks** app and filter by:
- **Responsible** = your name
- **Status** = "Pending" or "In Progress"

**Option 2:** Open the specific **Project** → click on the **Stage** → look at **Task Overview**

[NEEDS VERIFICATION: Exact filter UI and steps]

---

### Why is a task stuck on "Pending"?
It's probably a **dependent task** waiting for another task to be completed first. Check the **Dependencies** field to see what it's waiting for. Once that prerequisite task is marked "Complete", the pending task will auto-advance to "In Progress".

**See also:** PSP-000.1: Understanding Task Dependencies

---

### Can I add my own tasks?
Yes! Open the **Stage** where you want to add the task, find the **Task Overview** section, and click **"Add Task"**. Fill in the details and save.

---

### How do I create a subtask?
1. Create the parent task first (if it doesn't already exist)
2. Add a new task in the same stage
3. Set the **Type** field to "Subtask"
4. In the **Linked Parent Task** field, select the parent task
5. Save

[NEEDS VERIFICATION: Exact field names and UI for subtask creation]

---

### What happens when I mark a task complete?
1. The task status changes to green (Complete)
2. If other tasks depend on this one, they automatically change from "Pending" to "In Progress"
3. The person responsible for the dependent task gets notified

---

### How do I see all tasks for a project at once?
Open the **Project** → scroll to **Linked Stages** → click on each stage to see its **Task Overview**. 

[NEEDS VERIFICATION: Is there a way to see all tasks across all stages in one view?]

---

## Advancing Through Stages

### How do I move to the next stage?
1. Open the **Project**
2. Change the **"Current Stage Status"** field to "[Next Stage] Active"  
   (e.g., change from "Pre-Construction Active" to "Mobilization Active")
3. Save
4. Wait 2-3 minutes for tasks to auto-populate in the new stage

**See also:** PSP-103: Advancing a Project to the Next Stage

---

### Do I have to finish all tasks in a stage before moving to the next one?
Not necessarily. Talk to your PM. Some overlap is normal (e.g., you might start Mobilization while finishing a few Pre-Construction tasks). But ideally, critical tasks should be done before advancing.

---

### Can I go back to a previous stage?
You can change the **Current Stage Status** back if needed, but talk to your PM first. Going backward can cause confusion and might trigger unwanted automations.

---

## Managing Contacts

### How do I add a new GC contact?
1. Open the **Contacts** app
2. Click **"+ Add"**
3. Fill in: Name, Job Title, Organization, Email, Phone
4. Save

**See also:** [Adding Contacts](../contacts/adding-contacts.md)

---

### How do I link a contact to my project?
**From the project:**
1. Open the project
2. Find the **"Customer / GC"** field
3. Start typing the contact's name and select from the dropdown
4. Save

**See also:** [Linking Contacts to Projects](../contacts/linking-to-projects.md)

---

### What's the difference between "Customer / GC" and "GC Contacts"?
- **"Customer / GC"** - A relationship field that links to actual Contact records in the Contacts app (best for key people)
- **"GC Contacts"** - A text field for quick notes about who's who (less formal)

Use the relationship field when possible—it keeps data organized.

---

## RFIs, Submittals, and Change Orders

### How do I create an RFI?
1. Go to the **Pre-Construction** or **Construction** stage
2. In **Task Overview**, click **"Add Task"**
3. Name it "RFI: [Description]"
4. Set Status to "In Progress"
5. Document the question in **Notes**
6. Attach supporting docs
7. When the GC responds, add the answer to Notes and mark Complete

**See also:** [Managing RFIs](../submittals-rfis-change-orders/rfis.md)

---

### Where do I track submittals?
Submittals are tracked as **Tasks** in the **Pre-Construction** stage. Look for tasks with "Submittal" in the name, or create your own if needed.

**See also:** [Managing Submittals](../submittals-rfis-change-orders/submittals.md)

---

### How do I request a change order?
1. Create a task in the appropriate stage (usually Construction)
2. Name it "COR: [Description]"
3. Set Status to "In Progress"
4. In **Notes**, document:
   - What changed
   - Why it's extra work
   - Cost and time impact
5. Attach photos, emails, cost breakdown
6. Track approval in the task
7. When approved, mark Complete and notify PM to update Contract Value

**See also:** [Change Order Requests](../submittals-rfis-change-orders/change-orders.md)

---

### How long should I wait for an RFI response?
Typical turnaround is 5-10 business days, but check your contract. Follow up if you don't hear back, and **document your follow-ups** in the task Notes.

---

## Budget and Money

### How do I update the contract value after a change order is approved?
Your **PM or OC** handles this. Let them know the COR was approved and for how much, and they'll update the **Contract Value** field in the Project.

[NEEDS VERIFICATION: Can anyone edit Contract Value, or is it restricted?]

---

### What's the difference between Contract Value and Project Budget?
- **Contract Value** - What the GC is paying us (our revenue)
- **Project Budget** - What it costs us to do the work (our expenses)
- **Variance** - The difference (Contract Value minus costs = profit/loss)

---

## Safety and Compliance

### Where do I track safety stuff like 811 locates and SSSP?
In the **Safety & Compliance** app. There's usually a Safety record auto-created and linked to each project. You can also track safety as tasks in the Pre-Construction stage.

---

### Do I have to complete safety tasks before starting work?
**Yes**, especially 811 locates (it's the law) and SSSP (required by most GCs). Don't skip these—they protect you and the crew.

---

## Podio Basics

### Why can't I edit a certain field?
It might be a **calculated field** (auto-generated based on other fields). Examples:
- **Job ID** (calculated from Job # + Job Name)
- **Variance** (calculated from budget and costs)
- **Overall Progress** (calculated from stage completion)

You can't edit these directly—change the source fields instead.

---

### What does "Automation Status" mean?
It tracks whether background automations (like task creation) have finished running. Values:
- "1 - Pending Creation" - About to create tasks
- "2 - Creation Complete" - Tasks created, linking in progress
- "3 - Linking Complete" - All done

You don't usually need to touch this field—it's for the system to track its own progress.

---

### Can I delete a task or project?
You *can*, but **ask your PM first**. Deleting is usually a bad idea—it erases history. If a task is no longer relevant, mark it Complete with a note explaining why, rather than deleting it.

---

### How do I attach files?
Most apps have an **Attachments** or **Files** field (or **Documents & Logs** in Projects). Click the field, then click **"Upload"** or drag-and-drop files. Supported types: PDFs, images, Word docs, Excel, etc.

---

### Why isn't my automation working?
Give it time—automations can take 2-5 minutes to run. If it's been longer:
1. Refresh your browser
2. Check if the trigger condition was met (e.g., did you actually change the stage status?)
3. Contact your OC—they can check the GlobiFlow logs

---

## Getting Help

### I'm stuck. Who do I ask?
1. **First stop:** Your PM or OC—they know the system best
2. **Check the docs:** Look in the Podio documentation folder
3. **Look at similar projects:** See how others handled the same situation
4. **Ask in the team chat:** Someone's probably seen this before

---

### Where can I find more detailed guides?
Check these sections of this documentation:
- [Submittals, RFIs & Change Orders](/submittals-rfis-change-orders/submittals)
- [Contacts](/contacts/adding-contacts)
- [Reference](/reference/glossary)

And ask your OC for the official SOPs (PSP-101, PSP-102, etc.).

---

### Can I customize Podio for my needs?
**Minor stuff** (like adding a task or editing notes): Yes, do it!  
**Major stuff** (like changing field types or automations): Ask your OC first. Changes can affect everyone.

---

**Still have questions?** Reach out to your PM or OC. They're here to help!
