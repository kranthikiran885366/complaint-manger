# SCMS Style Guide

## Quick Reference

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | #1e40af | Primary actions, links, active states |
| Secondary Green | #10b981 | Success states, positive actions |
| Success | #10b981 | Successful operations |
| Error | #ef4444 | Error messages, dangerous actions |
| Warning | #f59e0b | Warnings, cautions |
| Info | #3b82f6 | Information messages |
| White | #ffffff | Backgrounds, text on colored backgrounds |
| Gray-50 | #f9fafb | Subtle backgrounds |
| Gray-100 | #f3f4f6 | Secondary backgrounds |
| Gray-900 | #111827 | Primary text |

### Typography Scale

```
h1: 28px, bold
h2: 24px, bold
h3: 20px, 600
h4: 16px, 600
p:  14px, 400
label: 13px, 600
small: 12px, 400
```

### Spacing Scale

```
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 48px
```

### Button Examples

```html
<!-- Primary Button -->
<button class="btn btn-primary">Submit</button>

<!-- Primary Large -->
<button class="btn btn-primary btn-large">Create Account</button>

<!-- Secondary -->
<button class="btn btn-secondary">Cancel</button>

<!-- Success -->
<button class="btn btn-success">Approve</button>

<!-- Danger -->
<button class="btn btn-danger">Delete</button>

<!-- Outline -->
<button class="btn btn-outline">Learn More</button>

<!-- Ghost -->
<button class="btn btn-ghost">Skip</button>

<!-- Small -->
<button class="btn btn-primary btn-small">Save</button>

<!-- Loading State -->
<button class="btn btn-primary btn-loading">Loading...</button>

<!-- Disabled -->
<button class="btn btn-primary" disabled>Disabled</button>
```

### Form Components

```html
<!-- Form Group -->
<div class="form-field">
    <label>Email Address</label>
    <input type="email" class="form-input" placeholder="your@email.com">
</div>

<!-- With Error -->
<div class="form-field">
    <label>Password</label>
    <input type="password" class="form-input error" placeholder="••••••••">
    <span class="form-field-error">Password is required</span>
</div>

<!-- With Success -->
<div class="form-field">
    <label>Username</label>
    <input type="text" class="form-input success" value="johndoe">
    <span class="form-field-success">Username available</span>
</div>

<!-- Textarea -->
<div class="form-field">
    <label>Description</label>
    <textarea class="form-textarea" placeholder="Enter description..."></textarea>
</div>

<!-- Select -->
<div class="form-field">
    <label>Department</label>
    <select class="form-select">
        <option>Water Supply</option>
        <option>Electricity</option>
    </select>
</div>

<!-- Checkbox -->
<label class="checkbox-wrapper">
    <input type="checkbox" class="checkbox-input">
    <span class="checkbox-label">I agree to terms</span>
</label>

<!-- Radio -->
<label class="radio-wrapper">
    <input type="radio" class="radio-input">
    <span class="radio-label">Option 1</span>
</label>

<!-- Toggle Switch -->
<label class="switch">
    <input type="checkbox" class="switch-input">
    <span>Enable notifications</span>
</label>
```

### Alert Examples

```html
<!-- Success Alert -->
<div class="alert alert-success">
    <i class="fas fa-check-circle"></i>
    Operation completed successfully!
</div>

<!-- Error Alert -->
<div class="alert alert-error">
    <i class="fas fa-exclamation-circle"></i>
    An error occurred. Please try again.
</div>
```

### Card Examples

```html
<!-- Stat Card -->
<div class="stat-card">
    <div class="stat-icon">
        <i class="fas fa-list"></i>
    </div>
    <div class="stat-content">
        <h3>150</h3>
        <p>Total Complaints</p>
        <div class="stat-trend positive">
            <i class="fas fa-arrow-up"></i>
            <span>+12% this month</span>
        </div>
    </div>
</div>

<!-- Content Card -->
<div class="content-card">
    <div class="card-header">
        <h2>Recent Complaints</h2>
        <div class="card-header-actions">
            <button class="btn btn-small">Refresh</button>
        </div>
    </div>
    <div class="card-body">
        <!-- Content here -->
    </div>
    <div class="card-footer">
        <button class="btn btn-primary">View All</button>
    </div>
</div>
```

### Status Badges

```html
<span class="status-badge status-pending">Pending</span>
<span class="status-badge status-in-progress">In Progress</span>
<span class="status-badge status-resolved">Resolved</span>
<span class="status-badge status-rejected">Rejected</span>
<span class="status-badge status-on-hold">On Hold</span>
```

### Layout Examples

#### Two-Column Layout
```html
<div class="form-row">
    <div class="form-field">
        <label>First Name</label>
        <input type="text" class="form-input">
    </div>
    <div class="form-field">
        <label>Last Name</label>
        <input type="text" class="form-input">
    </div>
</div>
```

#### Three-Column Grid
```html
<div class="content-grid three-col">
    <div class="stat-card"><!-- Card 1 --></div>
    <div class="stat-card"><!-- Card 2 --></div>
    <div class="stat-card"><!-- Card 3 --></div>
</div>
```

#### Full-Width Content
```html
<div class="content-grid full">
    <div class="content-card">
        <!-- Full width content -->
    </div>
</div>
```

### Navigation Components

#### Navbar with Dropdown
```html
<header class="navbar">
    <a href="#" class="navbar-logo">
        <div class="navbar-logo-icon">
            <i class="fas fa-shield-alt"></i>
        </div>
        <div class="navbar-logo-text">
            <div class="navbar-logo-title">SCMS</div>
            <div class="navbar-logo-subtitle">Government</div>
        </div>
    </a>
    
    <div class="navbar-right">
        <div class="navbar-dropdown">
            <button class="navbar-dropdown-toggle">
                <i class="fas fa-user"></i>
                John Doe
            </button>
            <ul class="navbar-dropdown-menu">
                <li class="navbar-dropdown-item">Profile</li>
                <li class="navbar-dropdown-item">Settings</li>
                <li class="navbar-dropdown-divider"></li>
                <li class="navbar-dropdown-item logout">Logout</li>
            </ul>
        </div>
    </div>
</header>
```

#### Sidebar Menu
```html
<aside class="sidebar">
    <div class="sidebar-header">
        <div class="sidebar-logo">SCMS</div>
    </div>
    
    <ul class="sidebar-menu">
        <li><a href="#" class="sidebar-menu-item active">
            <i class="fas fa-home"></i>
            Dashboard
        </a></li>
        <li><a href="#" class="sidebar-menu-item">
            <i class="fas fa-plus-circle"></i>
            New Complaint
        </a></li>
    </ul>
    
    <div class="sidebar-footer">
        <div class="sidebar-user">
            <div class="sidebar-user-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="sidebar-user-info">
                <h4>John Doe</h4>
                <p>Citizen</p>
            </div>
        </div>
        <div class="sidebar-actions">
            <button class="sidebar-action-btn">Settings</button>
            <button class="sidebar-action-btn logout">Logout</button>
        </div>
    </div>
</aside>
```

### Table Example

```html
<div class="content-card">
    <div class="card-header">
        <h2>Complaints List</h2>
    </div>
    <table class="data-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Department</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#12345</td>
                <td>Water Supply Issue</td>
                <td>Water Supply</td>
                <td><span class="status-badge status-pending">Pending</span></td>
                <td>2024-04-20</td>
            </tr>
        </tbody>
    </table>
</div>
```

## CSS Custom Properties Reference

```css
/* Colors */
--primary-blue: #1e40af;
--secondary-green: #10b981;
--success: #10b981;
--error: #ef4444;
--warning: #f59e0b;
--info: #3b82f6;
--white: #ffffff;
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-900: #111827;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 24px;
--spacing-2xl: 32px;
--spacing-3xl: 48px;

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 16px 40px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 20px 48px rgba(0, 0, 0, 0.18);
```

## Responsive Breakpoints

```css
/* Mobile First */
0px - Base styles

/* Tablet */
@media (max-width: 1024px) { }

/* Larger Tablets */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

## Best Practices

1. **Use CSS Variables** - Always use `var()` for consistency
2. **Mobile First** - Design for mobile, enhance for desktop
3. **Semantic HTML** - Use proper heading levels and semantic tags
4. **Accessibility** - Ensure sufficient color contrast and keyboard navigation
5. **Performance** - Minimize animations on mobile devices
6. **Consistency** - Follow the established patterns and spacing
7. **Responsive** - Test on multiple device sizes

## Maintenance

- Keep design-system.css as the single source of truth for colors and spacing
- Use utility classes for common patterns
- Document any custom color overrides
- Test responsive changes across all breakpoints
- Maintain backward compatibility with legacy styles
