# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Todo application built with Next.js 14, TypeScript, and Tailwind CSS. The project focuses on task management with features including CRUD operations, filtering, categorization, and local data persistence.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Storage**: LocalStorage/IndexedDB
- **Testing**: Jest + Testing Library + Playwright
- **Linting**: ESLint + Prettier

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   ├── todo/          # Todo-specific components
│   └── layout/        # Layout components
├── lib/               # Utilities and configurations
│   ├── utils.ts       # Helper functions
│   ├── storage.ts     # Local storage utilities
│   └── types.ts       # Shared TypeScript types
├── store/             # Zustand state management
│   └── todoStore.ts   # Main todo state store
└── hooks/             # Custom React hooks
```

## Core Features

### Essential Functions
- Create, read, update, delete todos
- Mark todos as complete/incomplete
- Set priority levels (high, medium, low)
- Add due dates and descriptions
- Categorize todos with labels

### Advanced Features
- Filter by status, priority, category
- Search todos by title/description
- Sort by due date, priority, creation date
- Export/import todo data
- Responsive design for all devices

## Development Commands

```bash
# Project initialization
npm create next-app@latest . --typescript --tailwind --eslint --app

# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking

# Testing
npm run test         # Run Jest tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run Playwright E2E tests
```

## Data Model

### Todo Interface
```typescript
interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  category?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

### Category Interface
```typescript
interface Category {
  id: string;
  name: string;
  color: string;
}
```

## State Management

Use Zustand for global state management with the following stores:
- `todoStore`: Manages todo items, CRUD operations, and filtering
- `categoryStore`: Manages categories and labels
- `uiStore`: Manages UI state (modals, filters, search)

## Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing using Tailwind's spacing scale
- Use semantic color classes for different todo priorities
- Implement dark mode support using Tailwind's dark mode utilities

## Local Storage Strategy

- Store todos in localStorage as JSON
- Implement data migration for schema changes
- Provide backup/restore functionality
- Handle storage quota exceeded errors gracefully

## Performance Considerations

- Use React.memo for todo list items to prevent unnecessary re-renders
- Implement virtual scrolling for large todo lists
- Debounce search input to avoid excessive filtering
- Use Next.js Image component for any icons or images