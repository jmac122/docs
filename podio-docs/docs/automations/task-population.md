# How Just-in-Time Task Population Works

## The Problem This Solves

Imagine opening a brand new project and seeing **200+ tasks** all at once - Pre-Construction, Mobilization, Construction, Demobilization, and Retainage all dumped on you on Day 1.

**Overwhelming.** And most of those tasks aren't relevant yet.

Instead, PSS Podio uses **just-in-time task population**: tasks are created **only when you activate a stage**. You see what you need, when you need it.

---

## How It Works: The Big Picture

1. You create a new **Project**
2. The system automatically creates 5 **Stages** (but NO tasks yet)
3. You're ready to start Pre-Construction work
4. You change **Current Stage Status** to **"Pre-Construction Active"**
5. **2-3 minutes later**, 40+ Pre-Construction tasks appear in that stage
6. Weeks later, you finish Pre-Con and change status to **"Mobilization Active"**
7. **2-3 minutes later**, Mobilization tasks appear
8. Repeat for each stage as the project progresses

---

## Step-by-Step: Activating a Stage and Populating Tasks

### Step 1: Open Your Project
Go to **Projects** app → Click your project

### Step 2: Change Current Stage Status
1. Find the **Current Stage Status** field
2. Click the dropdown
3. Select the stage you're moving to with **"Active"** suffix:
   - Pre-Construction Active
   - Mobilization Active
   - Construction Active
   - Demobilization Active
   - Retainage Active

4. Click **Save**

![Current Stage Status dropdown showing stage options](/img/projects/detail-page/12-current-stage-status.png)

### Step 3: Wait 2-3 Minutes
**This is critical:** The automation takes time to run.

**What's happening behind the scenes:**
1. GlobiFlow detects the status change
2. It queries the **Task Templates** app for tasks matching:
   - The stage you activated (e.g., Pre-Construction)
   - Your project's **Division** (Concrete, Drywall, or Other)
3. It creates each task one by one
4. It creates subtasks and links them to parent tasks
5. It sets **Automation Status** on the stage to track progress:
   - "1 - Pending Creation" → automation started
   - "2 - Creation Complete" → all tasks created
   - "3 - Linking Complete" → dependencies linked, done!

**Don't panic if tasks don't appear instantly.** Give it a few minutes.

### Step 4: Verify Tasks Appeared
1. Scroll down to **Linked Stages** on your project
2. Click into the stage you just activated (e.g., Pre-Construction)
3. Look at **Task Overview** - you should see tasks listed
4. Check **Automation Status** - should say "3 - Linking Complete"

![Stage detail showing Task Overview populated with tasks](/img/tasks/detail-page/02-task-overview-field.png)

If tasks didn't appear, see [troubleshooting-automations.md](troubleshooting-automations.md).

---

## What Tasks Get Created?

The tasks come from the **Task Templates** app, which is a master list of tasks for each stage and division.

### Example: Pre-Construction Stage for Concrete Division

**46 tasks** including:
- Contract & LOI review
- Permit applications and approvals
- Submittals (forms, concrete mix, rebar)
- RFIs (requests for information)
- Safety setup (811 locates, SSSP, badging)
- Scheduling and coordination
- Document collection

Each task has:
- Task Name
- Suggested Responsible role (PM, OC, FOCS, Foreman)
- Independent or Dependent status
- Prerequisite task # (if dependent)
- Type (Task, Recurring, Subtask)
- Notes with instructions

### Division Filtering

Your project's **Division** field determines which task templates are used:
- **Concrete** - full task set (primary PSS work)
- **Drywall** - different specialized tasks
- **Other** - generic fallback tasks

**Example:** A Concrete project gets "Submit formwork shop drawings" but a Drywall project gets "Submit drywall material specs" instead.

---

## Task Assignment: Roles → People

Task templates reference **roles** (e.g., "Project Manager", "Foreman"), not specific people.

**When tasks are created, the automation tries to fill in the actual person** based on your Project's fields:
- **Project Manager** field → fills tasks assigned to "PM"
- **OC - Operations Coordinator** field → fills tasks assigned to "OC"
- **FOCS - Field Operations Coordinator** field → fills tasks assigned to "FOCS"
- **Foreman** field → fills tasks assigned to "Foreman"

**If those fields are blank on the project**, tasks might be assigned to the role name instead of a person. You'll need to manually reassign them.

**Best practice:** Fill out PM, OC, FOCS, and Foreman fields **before** activating the first stage.

📸 [Screenshot placeholder: Project page showing PM, OC, FOCS, Foreman fields]

---

## Task Dependencies: Automatic Linking

Some tasks can't start until others finish. The templates define these relationships.

**Example from Pre-Construction:**
- Task 12: "Prepare SSSP" (Independent)
- Task 13: "Submit SSSP to Safety Director" (Dependent on Task 12)
- Task 14: "Receive SSSP Approval" (Dependent on Task 13)

**When tasks are created:**
1. All tasks are created first (Independent and Dependent)
2. Independent tasks are set to **Status = In Progress**
3. Dependent tasks are set to **Status = Pending**
4. A second automation runs and links dependencies
5. Each dependent task's **Dependencies** field is populated with the prerequisite task(s)

**After linking completes:**
- The stage's **Automation Status** changes to "3 - Linking Complete"
- The dependency chains are fully set up
- As prerequisite tasks are completed, dependent tasks will automatically unlock

See [dependencies.md](../tasks/dependencies.md) for full details on how this works.

---

## Subtasks: Automatic Creation

Some tasks have subtasks (smaller pieces of work).

**Example:**
- Main task: "Complete site utility connections"
- Subtasks:
  - "Call utility company for schedule"
  - "Coordinate site access for utility crew"
  - "Walk crew through site"
  - "Inspect connections"

**When the main task is created from a template**, the automation:
1. Creates the main task
2. Looks up **Subtask Templates** linked to that task template
3. Creates each subtask
4. Links subtasks to the parent task via **Linked Parent Task** field
5. Sets **Type = Subtask** on each

You'll see subtasks as linked items on the parent task.

---

## Timing: Why 2-3 Minutes?

**GlobiFlow automations aren't instant.** Here's why:

1. **Trigger detection** - GlobiFlow polls for changes (doesn't listen in real-time)
2. **Batch processing** - If creating 46 tasks, it does them one at a time with small delays
3. **Dependency linking** - A second automation runs after task creation completes
4. **Podio API limits** - Automations can't overwhelm the system

**Normal timing:**
- Simple stage (10 tasks): ~1 minute
- Complex stage (46 tasks): ~2-3 minutes
- If it's been >5 minutes and nothing appeared, something's wrong (see [troubleshooting-automations.md](troubleshooting-automations.md))

**Don't refresh the page constantly** - just wait a few minutes, then check.

---

## Recurring Tasks: Weekly Regeneration

Some tasks have **Type = Recurring** (e.g., weekly safety meetings, daily reports).

**When created from templates**, they work like regular tasks BUT:
- When you mark them **Complete**, the system automatically creates a fresh copy
- This happens on a schedule (usually weekly, Monday mornings) [NEEDS VERIFICATION]
- Only happens for active stages (e.g., Construction Active)

**You don't have to manually recreate recurring tasks** - they regenerate automatically.

---

## What If I Activate the Wrong Stage?

**Example:** You accidentally changed to "Mobilization Active" when you meant to stay in Pre-Construction.

**To fix:**
1. Change **Current Stage Status** back to the correct stage (e.g., "Pre-Construction Active")
2. The Mobilization tasks will remain (they don't auto-delete)
3. You can manually delete the Mobilization tasks, or just ignore them (they won't show in Pre-Con's Task Overview)

[NEEDS VERIFICATION: Do tasks auto-delete if you change the stage back? Or do they stay?]

**Best practice:** Double-check the stage name before saving.

---

## Can I Manually Create Tasks Too?

**Yes!** Just-in-time population handles the **standard workflow**, but you can always manually create tasks for:
- One-off items unique to this job
- Client-specific requests
- Additional subtasks
- Custom tracking

See [creating-tasks.md](../tasks/creating-tasks.md) for how to do this.

---

## Summary: Task Population Flow

```
You activate stage
    ↓
GlobiFlow detects change
    ↓
Queries Task Templates (stage + division)
    ↓
Creates tasks (2-3 minutes)
    ↓
Sets Automation Status = "2 - Creation Complete"
    ↓
Second automation links dependencies
    ↓
Sets Automation Status = "3 - Linking Complete"
    ↓
Tasks appear in Task Overview ✅
```

---

## Key Takeaways

✅ **Tasks are created just-in-time** when you activate a stage, not all at once
✅ **Wait 2-3 minutes** for task population to complete
✅ **Check Automation Status** to verify it worked ("3 - Linking Complete")
✅ **Fill out PM/OC/FOCS/Foreman fields** before activating stages so tasks are assigned correctly
✅ **Division matters** - Concrete, Drywall, and Other get different task templates
✅ **Dependencies are auto-linked** - Dependent tasks start as Pending and unlock when prerequisites complete
✅ **Subtasks are auto-created** from templates when parent tasks are created
✅ **Recurring tasks regenerate** automatically after completion

---

**Related:**
- [what-happens-automatically.md](what-happens-automatically.md) - Overview of all automations
- [troubleshooting-automations.md](troubleshooting-automations.md) - What to do if tasks don't appear
- [dependencies.md](../tasks/dependencies.md) - How task dependencies work
