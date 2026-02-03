# JLCP Dependency Flowcharts

Visual diagrams showing how tasks flow and depend on each other.

---

## Legend

| Color | Meaning |
|-------|---------|
| 🟢 Green | Independent task (can start immediately) |
| 🟡 Yellow | Dependent task (waiting on predecessor) |
| 🔵 Blue | Automation task (runs automatically) |
| 🟣 Purple | Cross-stage dependency |
| 🟠 Orange | Recurring task |

---

## Pre-Construction Dependencies

This is the most complex stage with 44 tasks and multiple dependency chains.

### Contract & Setup Flow

```mermaid
flowchart TD
    T1[1. Receive LOI/Contract<br/>PM] --> T12[12. Fill Job Info Template<br/>PM]
    T2[2. Submit Podio Intake<br/>PM] --> T4[4. Set up Google Drive<br/>AUTO]
    T2 --> T5[5. Add to Job Listings<br/>AUTO]
    T2 --> T6[6. Create Job Info Sheet<br/>AUTO]
    T2 --> T7[7. Create RFI Log<br/>AUTO]
    T2 --> T8[8. Create Submittal Log<br/>AUTO]
    T2 --> T9[9. Create Vendor Log<br/>AUTO]
    T2 --> T10[10. Create COR Log<br/>AUTO]
    T3[3. Solo Job Intro Meeting<br/>PM] --> T11[11. Add OST Takeoffs<br/>EST]
    T3 --> T16[16. Field Leak to DFO<br/>PM]
    T12 --> T13[13. Send to Accounting<br/>ACC]
    T12 --> T14[14. Review LOI/Contract<br/>ACC]
    T14 --> T15[15. Estimate Man Hours<br/>PM]
    T14 --> T17[17. Negotiate Contract<br/>PM+ACC]
    T14 --> T24[24. Add Project Spec<br/>ACC]
    T17 --> T18[18. Send Signed Contract<br/>PM+Owner]
    T18 --> T19[19. Enroll Insurance<br/>ACC]
    T18 --> T22[22. Create SOV<br/>PM]
    T18 --> T25[25. Determine Cost Est<br/>PM]
    T18 --> T27[27. Create GC Contacts<br/>PM]
    T18 --> T28[28. Select Vendors<br/>PM]
    T19 --> T20[20. Submit C3 Docs<br/>ACC]
    T19 --> T21[21. Enter to QuickBooks<br/>ACC]
    T19 --> T23[23. Enter SOV<br/>ACC]
    
    style T1 fill:#90EE90
    style T2 fill:#90EE90
    style T3 fill:#90EE90
    style T4 fill:#87CEEB
    style T5 fill:#87CEEB
    style T6 fill:#87CEEB
    style T7 fill:#87CEEB
    style T8 fill:#87CEEB
    style T9 fill:#87CEEB
    style T10 fill:#87CEEB
```

### Vendor & Submittal Flow

```mermaid
flowchart TD
    T28[28. Select Vendors<br/>PM] --> T29[29. Return Signed Quotes<br/>APM]
    T29 --> T30[30. Create Work Order<br/>PM]
    T29 --> T32[32. Upload Vendor Quotes<br/>APM]
    T29 --> T33[33. Fill Tax Exempt<br/>ACC]
    T29 --> T37[37. Compile Material List<br/>PM]
    T33 --> T34[34. Send Tax Exempt<br/>ACC]
    T34 --> T35[35. Request Shop Drawings<br/>APM]
    T35 --> T36[36. Review & Send Drawings<br/>PM]
    T37 --> T38[38. Pull Submittal Data<br/>APM]
    T37 --> T39[39. Pull Safety Data<br/>APM]
    T37 --> T40[40. Send SFA Submittals<br/>APM]
    T37 --> T42[42. Submit SDS<br/>APM]
    T37 --> T43[43. Track Submittals<br/>APM]
    T40 --> T41[41. Resubmit if Needed<br/>APM]
    T40 --> T44[44. Confirm Approval<br/>APM]
    T44 --> T45[45. Schedule Precon<br/>PM]
    
    style T28 fill:#FFD700
    style T29 fill:#FFD700
```

---

## Mobilization Dependencies

```mermaid
flowchart TD
    T18[18. Signed Contract<br/>Pre-Con] --> T46[1. Request CAD Files<br/>PM]
    T18 --> T47[2. Request Schedule<br/>PM]
    T46 --> T48[3. Forward CAD to Layout<br/>PM]
    T49[4. Attend Precon Meeting<br/>PM] --> T50[5. Create SSSP<br/>SC]
    T50 --> T51[6. Submit SSSP<br/>SC]
    T51 --> T52[7. SSSP Approval<br/>SC]
    T52 --> T53[8. Post SSSP on Site<br/>SC]
    T53 --> T54[9. Mobilize Equipment<br/>OC]
    
    style T18 fill:#DDA0DD
    style T49 fill:#90EE90
```

---

## Construction Dependencies  

```mermaid
flowchart TD
    T54[Mobilization Complete] --> C1[1. Daily Field Reports<br/>OC - RECURRING]
    T54 --> C2[2. Track Labor Hours<br/>OC - RECURRING]
    T54 --> C3[3. Material Tracking<br/>OC - RECURRING]
    C1 --> C4[4. Weekly Progress<br/>PM - RECURRING]
    C4 --> C5[5. Monthly Pay Apps<br/>ACC - RECURRING]
    
    style C1 fill:#FFA500
    style C2 fill:#FFA500
    style C3 fill:#FFA500
    style C4 fill:#FFA500
    style C5 fill:#FFA500
```

---

## Key Dependency Chains

### 1. Contract Chain (Critical Path)
```
LOI → Job Info → Review → Negotiate → Sign → Insurance → QuickBooks
```
**Owner:** PM → ACC → PM+Owner → ACC

### 2. Submittal Chain
```
Select Vendors → Signed Quotes → Material List → Pull Submittals → Send to GC → Approval → Precon Meeting
```
**Owner:** PM → APM → APM → APM → PM

### 3. Safety Chain
```
Precon Meeting → Create SSSP → Submit SSSP → Approval → Post on Site
```
**Owner:** PM → SC → SC → SC → SC

### 4. 811 Locate Chain (Recurring)
```
Request 811 → Wait for Marks → Document → [Repeat every 2 weeks]
```
**Owner:** SC (recurring)

---

**Related:**
- [jlcp-matrix.md](jlcp-matrix.md) — Full task table
- [dependencies.md](../tasks/dependencies.md) — How dependencies work
