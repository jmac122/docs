# Editing Project Info

Things change. Budget adjusts. Team members rotate. Addresses get corrected. Here's how to update project details after creation.

---

## Step-by-Step: Editing a Project

### 1. Find the Project

Use any method from [Finding Projects](finding-projects.md):
- Search by Job # or Name
- Browse the Projects list
- Filter by stage, PM, or division

![Projects list with one project highlighted](/img/projects/list-views/01-projects-list-all.png)

---

### 2. Open the Project

Click on the project to open it.

You'll see the full project page with all fields.

![Full project page view](/img/projects/detail-page/07-full-project-page.png)

---

### 3. Click Into Fields

Podio doesn't have an "edit mode" — just click directly into any field to change it. Your changes save automatically.

---

### 4. Update the Fields You Need

You can edit most fields. Here's what you can and can't change:

#### ✅ Safe to Edit Anytime

These fields can be updated without breaking anything:

- **Job Name** - Rename the project
- **Location/Address** - Fix typos or update address
- **Company** - Change the entity if needed
- **GC Contacts** - Add/remove contact info
- **Customer / GC** - Link or unlink contacts
- **Scopes** - Add or remove scope types
- **Project Manager** - Reassign to different PM
- **OC** - Change Operations Coordinator
- **FOCS** - Change Field Operations Coordinator
- **Foreman** - Reassign to different foreman
- **Project Budget** - Update budget as needed
- **Contract Value** - Update contract amount
- **LOI/Contract Date** - Adjust dates
- **Documents & Logs** - Add or remove files

![Project info fields - Job Name, Date Entered, LOI/Contract Date, Company, Location, Scopes, Customer/GC](/img/projects/fields/project-info-fields-annotated.png)

![Contract Value and Project Budget fields](/img/projects/fields/contract-budget-fields-annotated.png)

![Team member fields - Project Manager, Asst PM, OC, FOCS, Foreman, Accountant](/img/projects/fields/editable-fields-annotated.png)

---

#### ⚠️ Edit With Caution

These fields CAN be edited, but be careful:

##### **Job #**
**Why be careful:** This is your unique identifier. If you change it:
- Reports might lose track of the project
- People referring to the old number will be confused
- Timesheets or invoices might get disconnected

**When to change it:** Only if it was entered incorrectly from the start.

**How to change it safely:**
1. Tell everyone on the team the number is changing
2. Update any external references (spreadsheets, emails, etc.)
3. Change it in Podio

---

##### **Division**
**Why be careful:** Division controls which task templates get loaded.

**What happens if you change it:**
- Already-created tasks WON'T change
- Future stages will use the new division's tasks
- This can create a mismatch (Pre-Con tasks for Concrete, but Construction tasks for Drywall)

**When to change it:** Only if it was wrong from the start AND you haven't advanced past Pre-Construction yet.

**Better option:** If you're deep into the project, leave it as-is or create a new project with the correct division.

⚠️ **Do not change Division after the project is created — it will break task assignments.**

![Division field showing Concrete and Drywall options](/img/projects/fields/division-caution-annotated.png)

---

##### **Current Stage Status**
**Why be careful:** This field triggers major automations. Changing it creates tasks for the new stage.

**Don't change this casually.** Only change it when you're actually ready to advance to the next stage.

See [Advancing to Next Stage](../stages/advancing-to-next-stage.md) for full details.

---

#### ❌ Can't Edit (Calculated or Auto-Created)

These fields are automatic — you can't edit them:

- **Job ID** - Calculated from Job # + Job Name
- **Date Entered** - Set when project was created
- **Variance** - Calculated from budget vs. costs
- **Overall Progress** - Calculated from task completion
- **Open Tasks Count** - Calculated from incomplete tasks
- **Linked Stages** - Created automatically when project was created

If you need to "edit" one of these, you have to change the underlying data:
- Want to change Job ID? Edit Job # or Job Name
- Want to change Variance? Update Project Budget or costs
- Want to change Overall Progress? Complete more tasks

---

### 5. Save Your Changes

After editing:

1. Click **Save** (usually at the bottom of the page)
2. Changes are applied immediately
3. Anyone viewing the project will see the updates

![Save button at bottom of edit form](/img/projects/creating-editing/20-save-button.png)

---

## Common Edits & How-Tos

### Changing the Project Manager

**When:** PM switches, someone goes on vacation, or project gets reassigned.

**How:**
1. Open the project
2. Click the **Project Manager** field
3. Select the new PM from the dropdown
4. Save

**How to change it:** 
1. Click the **Add/Remove** button next to the Project Manager field
2. A dropdown will appear showing the current PM with an "x" next to their name
3. Click the "x" to remove the current PM
4. Either click a name from the list, or type a name and select it

![Project Manager field with Add/Remove button highlighted](/img/projects/fields/pm-add-remove-annotated.png)

![PM selection dropdown showing people list](/img/projects/fields/pm-selection-dropdown-annotated.png)

**What happens:**
- Tasks assigned to the old PM stay assigned to them
- New PM gets access to the project
- Existing tasks do NOT auto-reassign — you'll need to manually reassign them if needed

---

### Adding a Contact

**When:** You get a new GC contact, or need to add someone to the project.

**How:**
1. Open the project
2. Click the **Customer / GC** field
3. Search for the contact (if they already exist in your Contacts app)
   - Found them? Select and save.
   - Don't see them? Create a new contact first (in the Contacts app), then come back and link them.

**Shortcut for quick notes:**
Just type their name and phone in the **GC Contacts** text field if you don't need a full contact record.

![Customer/GC field with contact search popup](/img/projects/detail-page/11-customer-gc-field.png)

---

### Updating Budget or Contract Value

**When:** Numbers change due to change orders, revised contracts, or corrections.

**How:**
1. Open the project
2. Click into **Project Budget** or **Contract Value**
3. Enter the new dollar amount
4. Save

**What happens:**
- Variance recalculates automatically

**Tip:** If this is a change order, document it! Add a note in a task or upload the change order document to Documents & Logs.

![Budget fields being edited with new values](/img/projects/detail-page/10-budget-fields.png)

---

### Adding Files or Documents

**When:** You get new contracts, updated plans, photos, sign-offs, etc.

**How:**
1. Open the project
2. Scroll to **Documents & Logs**
3. Drag and drop files, or click to browse and upload
4. Files appear in the list
5. Save

**What happens:**
- Files are stored with the project
- Anyone with access can view/download them

**Tip:** Name files clearly before uploading (e.g., "Contract-Signed-2024-01-15.pdf" instead of "scan001.pdf").

![Documents & Logs field with files being uploaded](/img/projects/creating-editing/21-documents-upload.png)

---

### Changing Team Members (OC, FOCS, Foreman)

Same process as changing PM:
1. Click the field (OC, FOCS, or Foreman)
2. Select the new person from the dropdown
3. Save

![Team member fields with dropdowns open](/img/projects/creating-editing/17-team-member-dropdowns.png)

---

### Fixing a Typo in Job Name or Address

1. Click into the field (Job Name or Location/Address)
2. Edit the text
3. Save

**Note:** If you edit Job Name, the Job ID will recalculate automatically (since Job ID = Job # + Job Name).

---

## What NOT to Do

### ❌ Don't Change Job # Mid-Project
Unless it's absolutely wrong and you're willing to deal with confusion, leave it alone.

### ❌ Don't Delete Linked Stages
The 5 stages are created automatically and should stay linked to the project. Don't unlink them.  
You can unlink stages — they are not locked.

### ❌ Don't Advance Stage Status Unless Ready
Changing Current Stage Status to "Construction Active" before you're actually ready will create a bunch of tasks you're not ready for. See [Advancing to Next Stage](../stages/advancing-to-next-stage.md).

### ❌ Don't Delete Documents Without Checking
If someone uploaded a contract or plan, make sure you don't need it before deleting. Once deleted, it's gone.  
Deleted files cannot be recovered in Podio.

---

## Permissions & Who Can Edit

Any employee in the workspace can edit any project — there are no role-based restrictions on editing.

**General rule:** If you can see the project, you can probably edit it. But use common sense:
- Don't edit budget if you're not the PM
- Don't reassign team members unless you're authorized
- Don't delete files unless you uploaded them or got permission

---

## Troubleshooting

### "I can't edit a field — it's grayed out"
**Possible reasons:**
- It's a calculated field (Job ID, Variance, Overall Progress, etc.)
- You don't have permission

**Fix:** If it should be editable, check with an admin.

---

### "I edited the field but it didn't save"
**Possible reasons:**
- You didn't click Save
- Your internet connection dropped
- The field has a validation error (e.g., you entered text in a number field)

**Fix:** Refresh the page and try again. Make sure to click Save.

---

### "I changed Division but tasks didn't update"
**That's expected.** Changing Division doesn't retroactively change already-created tasks.

**Fix:** The only solution is to delete the project and recreate it with the correct Division. There is no other way.

---

### "I accidentally deleted a document — can I get it back?"
[NEEDS VERIFICATION: Podio file recovery options?]

**Best practice:** Don't delete files unless you're 100% sure. Rename them to "OLD - filename" if you're not sure instead of deleting.

---

## Quick Reference: What You Can Edit

| Field | Can Edit? | Notes |
|-------|-----------|-------|
| Job # | Yes (caution) | Only change if wrong from the start |
| Job Name | Yes | Safe anytime |
| Company | Yes | Safe anytime |
| Location | Yes | Safe anytime |
| GC Contacts | Yes | Safe anytime |
| Customer / GC | Yes | Safe anytime |
| Scopes | Yes | Safe anytime |
| Division | Yes (caution) | Won't change existing tasks |
| Project Manager | Yes | Safe anytime |
| OC, FOCS, Foreman | Yes | Safe anytime |
| Project Budget | Yes | Safe anytime |
| Contract Value | Yes | Safe anytime |
| LOI/Contract Date | Yes | Safe anytime |
| Current Stage Status | Yes (caution) | Triggers automations! |
| Documents & Logs | Yes | Safe to add/remove files |
| Job ID | No | Calculated field |
| Date Entered | No | Auto-set on creation |
| Variance | No | Calculated field |
| Overall Progress | No | Calculated field |
| Open Tasks Count | No | Calculated field |
| Linked Stages | No | Auto-created |

---

**Related Docs:**
- [The Project Page](the-project-page.md)
- [Creating a Project](creating-a-project.md)
- [Advancing to Next Stage](../stages/advancing-to-next-stage.md)
