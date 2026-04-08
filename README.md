# Interactive Calendar Component (Frontend Engineering Challenge)

## Overview

This project is a responsive, interactive calendar component built using React.js, inspired by a physical wall calendar design. The goal was to translate a static visual concept into a functional, user-friendly UI while maintaining strong attention to layout, usability, and responsiveness.

The component combines a visual hero section, date selection functionality, and a notes area into a cohesive experience.

---

## Key Features

### 1. Wall Calendar Aesthetic

* Top hero image representing the current month
* Curved visual separation between image and content
* Hanging/spiral design elements to mimic a physical calendar
* Clean white “paper-like” layout for notes and calendar grid

### 2. Day Range Selection

* Users can select a start date and an end date
* Clear visual distinction for:

  * Start date
  * End date
  * Dates within the selected range
* Selection logic handles:

  * Reverse selection (end before start)
  * Resetting selection on new interaction

### 3. Persistent State (Local Storage)

* Selected date range is saved per month
* Notes are saved per month
* Data persists across page reloads
* Each month maintains independent state

### 4. Integrated Notes Section

* Dedicated notes area styled like lined paper
* Users can write and edit monthly notes
* Notes are automatically saved using localStorage

### 5. Fully Responsive Design

* Desktop:

  * Two-column layout (notes + calendar)
  * Balanced spacing and proportions
* Mobile:

  * Vertical stacked layout
  * Touch-friendly date selection
  * Readable and accessible UI

### 6. Month Navigation

* Navigate between months using Prev / Next buttons
* Month-specific:

  * Image
  * Notes
  * Date range

---

## Tech Stack

* React.js (Vite)
* Zustand (State Management)
* Tailwind CSS (Styling)
* date-fns (Date utilities)
* localStorage (Client-side persistence)

---

## Project Structure

```
src/
  components/
    CalendarLayout.jsx
    HeroSection.jsx
    MonthBadge.jsx
    NotesSection.jsx
    CalendarSection.jsx
    CalendarGrid.jsx
    DayCell.jsx
  store/
    useCalendarStore.js
  utils/
    calendarUtils.js
    monthImages.js
  App.jsx
```

---

## Design Decisions

* **Zustand over Context/Redux**: Chosen for lightweight global state handling without boilerplate.
* **Month-wise persistence**: Improves UX by isolating notes and selections per month.
* **Component separation**: Each UI section is modular for readability and maintainability.
* **Minimal dependencies**: Avoided heavy calendar libraries to demonstrate core logic implementation.

---

## How to Run Locally

```bash
npm install
npm run dev
```

---

## Deployment

Live Demo: https://calendar-efc2.onrender.com/

---

## Video Demonstration

Video Walkthrough: https://youtu.be/ABPaPcLGkWM

---

## What Was Implemented vs Scope

✔ Fully functional frontend component
✔ No backend or database (as instructed)
✔ Client-side persistence using localStorage
✔ Responsive behavior across screen sizes

---

## Summary

This project focuses on translating a visual concept into a functional UI component with attention to usability, responsiveness, and state management. The emphasis was on clean architecture, predictable interactions, and a polished user experience within a frontend-only scope.

---
