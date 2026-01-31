# How to Manually Create Tasks

## When to Create Tasks Manually

**Most tasks are created automatically** when you activate a new stage (see [task-population.md](../automations/task-population.md)).

You should manually create a task when:
- Something unique comes up that's not in the standard templates
- You need to track a one-off item (e.g., "Meet with architect about change order")
- A subtask needs more subtasks
- Client requests something specific to this job

**Don't manually create tasks that should be automated** - talk to your PM if standard tasks are missing.

## How to Create a New Task

### Step 1: Go to the Tasks App
1. Open the **Tasks** app from your Podio workspace
2. Click **"Add new task"** (usually a + button or "New" button)

📸 [Screenshot placeholder: Tasks app with Add New button highlighted]

### Step 2: Fill Out Required Fields

**Task Name** (Text)
- Clear, specific description
- Good: "Submit electrical permit application"
- Bad: "Permit stuff"

**Status** (Category)
- **Pending** - not started yet
- **In Progress** - actively working on it
- **Complete** - done
- Most new tasks start as either Pending or In Progress

**Responsible** (User)
- Who's doing this task?
- Pick from the dropdown of PSS team members
- If you're creating it for yourself, pick your name

**Linked Stage** (Relationship)
- Which stage does this belong to?
- Pick from the 5 stages: Pre-Construction, Mobilization, Construction, Demobilization, or Retainage
- **Important:** This links the task to the stage so it shows up in that stage's Task Overview

**Linked Project** (Relationship)
- Which job is this for?
- Pick the project from the dropdown
- This connects the task to the overall job

![Task creation form showing required fields](/img/projects/creating-editing/16-required-fields.png)

### Step 3: Fill Out Optional But Helpful Fields

**Due Date** (Date)
- When does this need to be done?
- Helps with sorting and urgency

**Ind or Dep** (Category)
- **Independent** - can be started right away
- **Dependent** - waits for another task first
- If you pick Dependent, fill out Dependencies field (see below)

**Dependencies** (Relationship to Tasks)
- Only needed if this is a Dependent task
- Click into the field and search for the task(s) that must be completed before this one can start
- You can link to multiple prerequisite tasks

**Type** (Category)
- **Task** - standard one-time task (most common)
- **Recurring** - repeats on a schedule (e.g., weekly safety meetings)
- **Subtask** - a smaller task under a parent task
- If Subtask, fill out **Linked Parent Task** field

**Notes** (Text multi-line)
- Add context, instructions, or background
- Super helpful for whoever is responsible

**Attachments** (Files)
- Upload relevant docs, photos, contracts, etc.

📸 [Screenshot placeholder: Task creation form showing optional fields]

### Step 4: Save
Click **Save** or **Create** button.

Your task now appears in:
- The **Tasks** app
- The **Task Overview** for the stage you linked it to
- The responsible person's task list

## Creating Subtasks

If you need to break a task into smaller pieces:

### Step 1: Create the Main Task First
Follow the steps above. Let's say you create "Install formwork system" as the main task.

### Step 2: Create Subtasks
1. Create a new task (same as above)
2. Give it a clear name, like "Set up form panels - Grid A1"
3. Set **Type = Subtask**
4. In **Linked Parent Task** field, search for and select "Install formwork system"
5. Fill out **Responsible**, **Status**, **Linked Stage**, and **Linked Project** (subtasks need these too)
6. Save

Repeat for each subtask.

### What This Does
- Subtasks appear as linked items under the parent task
- You can complete subtasks independently
- The parent task can track overall progress by seeing subtask completion

[NEEDS VERIFICATION: Does parent task completion % auto-calculate from subtasks, or is it manual?]

## Creating Recurring Tasks

For tasks that happen regularly (daily reports, weekly meetings, etc.):

1. Create a task as normal
2. Set **Type = Recurring**
3. Fill out all fields like normal
4. Save

**What happens:**
- When you mark this task Complete, a new copy automatically gets created (usually weekly on Mondays)
- The completed task stays in the system for record-keeping
- This keeps repeating until you delete the recurring task or the stage becomes inactive

[NEEDS VERIFICATION: What's the exact recurrence schedule? Weekly on Mondays? Configurable? Only during Construction?]

## Tips for Creating Good Tasks

✅ **Do:**
- Use clear, action-oriented task names ("Submit permit" not "Permit")
- Assign to a specific person, not "TBD"
- Set realistic due dates
- Add notes with context - future you will thank you
- Link to the correct Stage and Project (required for it to show up in the right places)

❌ **Don't:**
- Create duplicate tasks that already exist in templates
- Create tasks without linking to a Stage and Project (they'll be orphaned)
- Forget to set Ind or Dep - this affects workflow automation
- Leave Responsible blank - every task needs an owner

## Editing Tasks After Creation

Made a mistake? No problem:
1. Open the task
2. Click **Edit** (or fields might be directly editable)
3. Change whatever needs fixing
4. Save

You can edit any field at any time - Status, Responsible, Due Date, Dependencies, etc.

## Deleting Tasks

If you created a task by mistake:
1. Open the task
2. Click the **Delete** or **Archive** option (usually in a menu)
3. Confirm

**Warning:** Deleting a task that other tasks depend on might break dependency chains. If unsure, check with your PM.

## Common Scenarios

### Scenario 1: Client Requests Special Inspection
1. Create new task: "Coordinate special geotechnical inspection"
2. Type = Task, Ind or Dep = Independent
3. Responsible = Project Manager
4. Linked Stage = Construction
5. Linked Project = [Your job]
6. Due Date = [When client needs it]
7. Notes = "Client requested soil testing on grid lines A3-A5 per email 1/15"
8. Save

### Scenario 2: Breaking Down a Complex Task
Main task: "Complete utility connections"

Subtasks:
- "Call utility company for schedule" (Type = Subtask, Linked Parent = main task)
- "Coordinate utility crew site access" (Type = Subtask, Linked Parent = main task)
- "Walk utility crew through site" (Type = Subtask, Linked Parent = main task)
- "Inspect connections after installation" (Type = Subtask, Linked Parent = main task)

Each subtask has its own Responsible person and Due Date.

### Scenario 3: Creating a Dependency Chain
Task A: "Finalize concrete mix design" (Independent, In Progress)
Task B: "Order concrete materials" (Dependent, Pending, Dependencies = Task A)

When Task A is marked Complete, Task B will automatically change to In Progress.

---

**Related:**
- [task-population.md](../automations/task-population.md) - How most tasks are created automatically
- [dependencies.md](dependencies.md) - How to set up task dependencies
- [assigning-tasks.md](assigning-tasks.md) - How to change who's responsible
