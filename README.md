# 📅 React Calendar Component

A clean, modular **React + TypeScript Calendar** with event management and Storybook documentation.  
This project demonstrates component architecture, custom hooks, state management, and UI separation.

---

##Live Demo: [https://manas-kalamkar.github.io/calendar-component/]

---

## ✨ Features

### ✅ Calendar View
- Month grid with date utilities  
- Click any date to open event modal  
- Next/Previous month navigation  
- Highlights selected date  

### ✅ Event Modal
Supports:
- Event title  
- Time (start & end)  
- Description  
- Color  
- Delete event  

### ✅ Custom Hooks

| Hook | Purpose |
|------|---------|
| `useCalendar()` | Month navigation, selected date handling |
| `useEventManager()` | Add & delete events |

### ✅ Storybook Included
- Individual component previews  
- Interactive testing  
- Chromatic ready  

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React + TypeScript | UI & type safety |
| Vite | Dev bundler |
| Tailwind CSS | Styling |
| Storybook | Component documentation |
| Chromatic | Storybook hosting |
| UUID | Event IDs |

---

## 📂 Project Structure
```
src/
│
├── components/
│ └── Calendar/
│ ├── CalendarView.tsx
│ ├── CalendarCell.tsx
│ └── EventModal.tsx
│
├── hooks/
│ ├── useCalendar.ts
│ └── useEventManager.ts
│
├── utils/
│ └── date.utils.ts
│
└── stories/
├── CalendarCell.stories.tsx
├── CalendarView.stories.tsx
└── EventModal.stories.tsx

```
---

## 📚 Storybook

### Run Storybook locally:

npm run storybook


---

## ✅ Screenshots  
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8611146c-0e2b-47a3-b0b7-ed0133bbf896" />
Creating Event:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/87d799e5-77d0-409e-9456-d24ec1622280" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/012e7687-9fb1-4329-beb2-d2fb8f682581" />


## 📄 License  
MIT © 2025
