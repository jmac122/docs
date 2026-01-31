# Troubleshooting Automations

Things usually work smoothly, but sometimes automations don't fire as expected. Here's how to diagnose and fix common issues.

---

## Problem 1: Tasks Didn't Appear When I Activated a Stage

### Symptoms
- You changed **Current Stage Status** to "[Stage] Active"
- It's been >5 minutes
- **Task Overview** is still empty on that stage
- **Automation Status** is stuck on "1 - Pending Creation" or blank

### Diagnosis Steps

**Step 1: Check Automation Status**
1. Open the **Stage** (click it from Linked Stages on the project)
2. Look at the **Automation Status** field

**What it should say:**
- "3 - Linking Complete" ✅ (all done)

**What it might say:**
- "1 - Pending Creation" ⏳ (still processing, give it more time)
- Blank ❌ (automation didn't trigger)
- "2 - Creation Complete" ⏸️ (tasks created, but dependencies not linked yet)

![Stage detail showing Automation Status field](/img/tasks/detail-page/05-task-status-field.png)

**Step 2: Check Task Templates Exist**
The automation pulls from **Task Templates** app.

1. Go to **Task Templates** app (should be in your workspace)
2. Filter by **Project Stage = [Your Stage]** (e.g., Pre-Construction)
3. Filter by **Division = [Your Project Division]** (e.g., Concrete)
4. Do templates exist?

**If NO templates exist:**
- The automation has nothing to create tasks from
- Contact your admin/PM to populate templates

**If templates exist:**
- Automation should have worked
- Continue to Step 3

**Step 3: Check Project Division Field**
The automation filters templates by **Division**.

1. Open your **Project**
2. Look at the **Division** field
3. Is it set to Concrete, Drywall, or Other?

**If Division is blank:**
- Automation can't find templates
- Set the Division field
- Change Current Stage Status to the stage again to re-trigger automation

**Step 4: Wait Longer (Seriously)**
If it's only been 2-3 minutes, **be patient**.

Complex stages (40+ tasks) can take up to 5 minutes if the system is busy.

**Step 5: Re-Trigger the Automation**
If it's been >5 minutes and still nothing:

1. Change **Current Stage Status** to a different stage (e.g., if stuck on Pre-Con, change to Mobilization)
2. Save
3. Wait 30 seconds
4. Change it back to the correct stage (e.g., Pre-Construction Active)
5. Save
6. Wait 2-3 minutes

This "resets" the automation trigger.

### Still Not Working?

**Contact your GlobiFlow admin or PM.** Possible causes:
- GlobiFlow automation is paused or disabled
- API connection issue with Podio
- Template app was moved or deleted
- Automation was edited incorrectly

---

## Problem 2: Tasks Were Created But Dependencies Didn't Link

### Symptoms
- Tasks appeared in Task Overview ✅
- **Automation Status** says "2 - Creation Complete" (not "3 - Linking Complete")
- Dependent tasks have empty **Dependencies** field (should show prerequisite tasks)
- All tasks are In Progress (Dependent tasks should be Pending)

### Diagnosis Steps

**Step 1: Check Automation Status**
If it says "2 - Creation Complete":
- Task creation worked
- Dependency linking automation didn't run (yet or at all)

**Step 2: Wait a Bit Longer**
Dependency linking is a **second automation** that runs after task creation completes.

Give it another 2-3 minutes.

**Step 3: Check Task Templates for Dependent Task #**
The linking automation uses **Dependent Task #** field in templates to know what to link.

1. Go to **Task Templates** app
2. Find a template that should be Dependent
3. Check if **Dependent Task #** field is filled out

**If it's blank:**
- Template is incomplete
- Tasks won't link automatically
- You'll need to manually add dependencies (see below)

**Step 4: Manually Link Dependencies**
If automation failed or templates are incomplete:

1. Open a Dependent task
2. Edit the **Dependencies** field
3. Search for and select the prerequisite task(s)
4. Change **Status** from In Progress to **Pending** (since it should wait)
5. Save

Repeat for each dependent task.

![Editing Dependencies field on a task](/img/tasks/dependencies/01-tasks-dependency-column.png)

This is tedious but ensures workflows work correctly.

---

## Problem 3: Dependent Task Didn't Unlock When I Completed Prerequisite

### Symptoms
- You marked Task A **Complete**
- Task B depends on Task A (you verified in **Dependencies** field)
- Task B is still **Status = Pending** (should have changed to In Progress)
- The responsible person wasn't notified

### Diagnosis Steps

**Step 1: Verify Dependency is Set Correctly**
1. Open Task B (the dependent task)
2. Look at **Dependencies** field
3. Does it list Task A?

**If NO:**
- The dependency wasn't linked correctly
- Automation won't trigger
- Manually add Task A to Dependencies field, then re-complete Task A (see Step 4)

**If YES:**
- Dependency is set correctly
- Continue to Step 2

**Step 2: Check Task A is Actually Complete**
1. Open Task A
2. Look at **Status** field
3. Is it **Complete** (green)?

**If NO:**
- You might have changed it back by mistake
- Mark it Complete again

**Step 3: Check GlobiFlow is Running**
[NEEDS VERIFICATION: How can users check GlobiFlow status? Is there a dashboard?]

If GlobiFlow is paused or disabled, automations won't run.

**Contact your admin** to verify GlobiFlow is active.

**Step 4: Re-Trigger the Automation**
1. Open Task A (the prerequisite)
2. Change **Status** to In Progress (temporarily)
3. Save
4. Change **Status** back to Complete
5. Save
6. Wait 30 seconds
7. Check Task B - it should now be In Progress

This forces the automation to detect the completion event again.

**Step 5: Manually Unlock Task B**
If automation still doesn't work:

1. Open Task B
2. Change **Status** to **In Progress**
3. Save
4. Manually notify the responsible person

Then contact your admin about the automation failure.

---

## Problem 4: Recurring Tasks Didn't Regenerate

### Symptoms
- You completed a task with **Type = Recurring**
- It's been a week (or the expected recurrence interval)
- No new copy of the task appeared

### Diagnosis Steps

**Step 1: Check Stage is Still Active**
Recurring tasks only regenerate for **active stages**.

1. Open your **Project**
2. Check **Current Stage Status**
3. Is the stage the task belongs to still Active?

**If NO:**
- You moved to a new stage
- Recurring tasks from old stage won't regenerate
- This is expected behavior

**If YES:**
- Continue to Step 2

**Step 2: Check Type Field**
1. Open the completed recurring task
2. Look at **Type** field
3. Is it set to **Recurring**?

**If NO:**
- It's not marked as recurring
- Won't regenerate
- Edit it and set Type = Recurring, or manually create a new copy

**Step 3: Check Recurrence Schedule**
[NEEDS VERIFICATION: What's the exact recurrence schedule? Weekly on Mondays? Configurable?]

The regeneration might be on a weekly schedule (e.g., Mondays at 9 AM).

If you completed the task on Thursday, a new one might not appear until next Monday.

**Step 4: Contact Admin**
If it's past the expected regeneration time and still nothing:
- GlobiFlow recurring task automation might be disabled
- Schedule might have changed
- Contact admin to investigate

---

## Problem 5: New Project Didn't Create Stages

### Symptoms
- You created a new **Project**
- Stages weren't automatically created
- **Linked Stages** field is empty

### Diagnosis Steps

**Step 1: Wait a Minute**
Stage creation is usually fast (30-60 seconds), but give it a minute.

**Step 2: Check GlobiFlow**
The "Create Stages on New Project" automation might be paused.

Contact your admin to verify it's active.

**Step 3: Manually Create Stages**
If automation is broken and you need to move forward:

1. Go to **Stages** app
2. Create 5 stages manually:
   - Pre-Construction
   - Mobilization
   - Construction
   - Demobilization
   - Retainage
3. For each stage, set **Linked Project** to your project
4. Fill out other fields (Stage Name, etc.)

This is tedious, but gets you unblocked.

**Then contact admin** to fix the automation for future projects.

---

## Problem 6: Tasks Assigned to Wrong People

### Symptoms
- Tasks were created, but **Responsible** field shows the wrong person or a role name (e.g., "Project Manager" instead of "Jared McKenzie")

### Diagnosis Steps

**Step 1: Check Project Role Fields**
Task assignment pulls from **Project** fields:

1. Open your **Project**
2. Check these fields:
   - **Project Manager** (should be a person's name)
   - **OC - Operations Coordinator** (should be a person's name)
   - **FOCS - Field Operations Coordinator** (should be a person's name)
   - **Foreman** (should be a person's name)

**If any are blank:**
- Tasks assigned to that role will be blank or show the role name
- Fill in the correct person
- Manually reassign the tasks (see [assigning-tasks.md](../tasks/assigning-tasks.md))

**Step 2: Manually Reassign Tasks**
If automation assigned incorrectly:

1. Go to **Tasks** app
2. Filter by the stage or project
3. Open each task with wrong assignment
4. Change **Responsible** to the correct person
5. Save

Or use bulk edit if available [NEEDS VERIFICATION].

**This doesn't break anything** - you're just overriding the automation's initial assignment.

---

## Problem 7: Automation Status Stuck on "1 - Pending Creation"

### Symptoms
- Changed Current Stage Status
- **Automation Status** shows "1 - Pending Creation"
- It's been >10 minutes
- No tasks appeared

### Diagnosis

**This means the automation started but didn't finish.**

Possible causes:
- GlobiFlow encountered an error mid-process
- API rate limit hit
- Template data is malformed

### Solution

**Step 1: Re-Trigger**
1. Change **Current Stage Status** to a different stage
2. Save
3. Wait 1 minute
4. Change back to the correct stage
5. Save
6. Wait 5 minutes

**Step 2: Contact Admin**
If it happens again, there's a deeper issue with the automation.

Provide:
- Project name
- Stage you tried to activate
- Division
- Time you triggered it

Admin can check GlobiFlow logs for errors.

---

## General Troubleshooting Tips

### ✅ Do:
- **Wait at least 2-3 minutes** before assuming an automation failed
- **Check Automation Status field** for clues
- **Verify required fields are filled out** (Division, PM, OC, etc.)
- **Re-trigger automations** by changing and re-changing fields
- **Manually fix issues** if you need to keep working (reassign tasks, add dependencies)
- **Document what went wrong** so you can report to admin

### ❌ Don't:
- Panic and start deleting things
- Create duplicate tasks while waiting for automation (wait first!)
- Assume it's broken after 30 seconds
- Manually create 40+ tasks when you could just re-trigger automation

### When to Contact Admin

Contact your GlobiFlow admin or PM if:
- Automation fails repeatedly
- Automation Status is stuck for >10 minutes
- Tasks are missing fields or data
- You see error messages
- Recurring tasks haven't regenerated after multiple cycles
- Entire stages are missing tasks

**Provide details:**
- Project name
- Stage
- Division
- What you were trying to do
- What happened (or didn't happen)
- Screenshot of Automation Status or error

---

## Quick Reference: Automation Status Meanings

| Status | Meaning | What To Do |
|--------|---------|------------|
| Blank | Automation hasn't triggered | Re-trigger by changing stage status again |
| "1 - Pending Creation" | Automation started, creating tasks | Wait 2-5 minutes |
| "2 - Creation Complete" | Tasks created, linking dependencies | Wait 1-2 more minutes |
| "3 - Linking Complete" | All done! ✅ | Nothing, it worked |
| Stuck on "1" for >10 min | Automation failed mid-process | Re-trigger, contact admin if repeats |

---

**Related:**
- [what-happens-automatically.md](what-happens-automatically.md) - Overview of all automations
- [task-population.md](task-population.md) - How just-in-time task creation works
- [dependencies.md](../tasks/dependencies.md) - How dependencies work
