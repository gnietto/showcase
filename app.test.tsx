import {Hono} from "hono";
import {expect} from "jsr:@std/expect";
import {app} from "./app.tsx";


Deno.test("El servidor funciona correctamente", async (t) => {
  await t.step("responde con status 200", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
  });
});

Deno.test("<Presentacion /> despliega contenido", async (t) => {
  await t.step("<Presentacion /> despliega palabras clave", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Spaceger");
    expect(contieneTexto).toContain("autodidacta");
    expect(contieneTexto).toContain("Agile");
    expect(contieneTexto).toContain("DevOps");
    expect(contieneTexto).not.toContain("Germ");
  })
 });

Deno.test("<Footer /> despliega contenido", async (t) => {
  await t.step("<Footer/> despliega palabras clave", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Diseñado");
    expect(contieneTexto).toContain("Spaceger");
  });
 });

/**
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent'; // Adjust the import based on your file structure
import { Hono } from 'hono';

describe('MyComponent', () => {
  const app = new Hono();

  beforeAll(() => {
    app.get('/', (c) => c.text('Hello Hono!'));
  });

  it('renders the component correctly', () => {
    render(<MyComponent />);
    const linkElement = screen.getByText(/Hello Hono!/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should respond to the Hono route', async () => {
    const response = await app.fetch('/');
    expect(response.status).toBe(200);
    const text = await response.text();
    expect(text).toBe('Hello Hono!');
  });
});

---
import { Hono } from 'hono';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent'; // Adjust the import based on your file structure

describe('MyComponent with Hono', () => {
  const app = new Hono();

  app.get('/', (c) => c.render(<MyComponent />)); // Using c.render to render the component

  it('renders the component correctly', async () => {
    const response = await app.fetch('/');
    const text = await response.text();
    expect(text).toContain('Expected Text in MyComponent'); // Replace with actual expected text
  });
});
---


import { Hono } from 'hono';
import { render, fireEvent } from '@testing-library/react';
import DragAndDropComponent from './DragAndDropComponent'; // Adjust the import based on your file structure

describe('DragAndDropComponent with Hono and d3-drag', () => {
  const app = new Hono();

  app.get('/', (c) => c.render(<DragAndDropComponent />)); // Using c.render to render the component

  it('allows dragging and dropping an element', async () => {
    const { getByTestId } = render(<DragAndDropComponent />);
    
    const draggableElement = getByTestId('draggable'); // Ensure your component has a data-testid for the draggable element
    const dropZone = getByTestId('drop-zone'); // Ensure your component has a data-testid for the drop zone

    // Simulate drag start
    fireEvent.mouseDown(draggableElement);
    
    // Simulate drag move
    fireEvent.mouseMove(dropZone);
    
    // Simulate drop
    fireEvent.mouseUp(dropZone);

    // Assert the expected outcome after drop
    expect(dropZone).toContainElement(draggableElement); // Check if the draggable element is now in the drop zone
  });
});


---

Deno.test('GET / should render HTML with correct styles', async () => {
  const req = new Request('http://localhost/', { method: 'GET' });
  const res = await app.request(req);
  const body = await res.text();

  assertEquals(res.status, 200);

  // Assert that the HTML includes a link to the CSS file
  const cssLinkRegex = /<link rel="stylesheet" href="\/styles\.css">/;
  assert(cssLinkRegex.test(body));

  // Assert that the HTML includes the expected styles
  const htmlParser = new DOMParser();
  const doc = htmlParser.parseFromString(body, 'text/html');

  const h1Element = doc.querySelector('h1');
  assert(h1Element);

  // Assert that the h1 element has the expected styles
  const styles = getComputedStyle(h1Element);
  assertEquals(styles.backgroundColor, 'blue');
  assertEquals(styles.fontSize, '24px'); // Assuming you have a CSS rule for font-size
});

// Helper function to get computed styles
function getComputedStyle(element: Element): CSSStyleDeclaration {
  const win = element.ownerDocument.defaultView;
  return win.getComputedStyle(element);
}


---
Basic css test SSR:

import { Hono } from 'hono';
import { assertEquals } from '@std/assert';
import app from './your-hono-app.ts'; // Import your Hono app

Deno.test('GET / should render HTML with correct styles', async () => {
    const req = new Request('http://localhost/', { method: 'GET' });
    const res = await app.request(req);
    const body = await res.text();
    assertEquals(res.status, 200);
    assert(body.includes('Hello, Hono!'));
    assert(body.includes('background-color: blue;'));
});


====

Solutions to "The value Promise {<pending>}":
- Use async/await: If you're using an async function, make sure to await the promise before making assertions.

it('should return the expected item', async () => {
    const result = await someAsyncFunction();
    expect(result).toContain(expectedItem);
});

- Return the Promise: If you're not using async/await, ensure you return the promise in the test.

it('should return the expected item', () => {
    return someAsyncFunction().then(result => {
        expect(result).toContain(expectedItem);
    });
});

- Check Promise Resolution: Ensure that the code you are testing resolves the promise with the expected value.


---
Solutions to TypeError: Body already consumed

- Read the Body Once: Ensure that you read the body only once.
- If you need to use the body data multiple times, consider storing it in a variable after the first read.

app.post('/example', (req, res) => {
    const body = req.body; // Read once
    // Use `body` as needed
});

- Clone the Request: If you need to read the body multiple times in a Fetch API context, you can clone the request.
- However, this is not applicable to all frameworks.

fetch(url)
    .then(response => {
        const clonedResponse = response.clone(); // Clone the response
        return clonedResponse.json(); // Read from the clone
    })
    .then(data => {
        // Process data
    });

- Use Middleware Properly: If using Express.js, ensure that your middleware (like body parsers) is set up correctly and that you're not trying to read the body after it has been processed.
- Check Your Logic: Review your code logic to ensure that you're not unintentionally consuming the body before you need it.



====
Sure! Here’s a list of common UI tests and backend tests for web applications.
Common UI Tests for Web Applications

    Page Load Time: Measure the time taken for a page to load completely.
    Responsive Design: Test how the application looks on different screen sizes and devices.
    Navigation: Verify that all navigation links work correctly and lead to the expected pages.
    Form Validation: Check that form fields validate user input correctly (e.g., required fields, email format).
    Button Functionality: Ensure buttons perform their intended actions when clicked.
    Error Messages: Verify that appropriate error messages are displayed for invalid inputs.
    Accessibility Checks: Ensure the application is accessible to users with disabilities (e.g., screen reader compatibility).
    Cross-Browser Compatibility: Test the application on different web browsers (Chrome, Firefox, Safari, etc.).
    UI Element Visibility: Ensure all UI elements (buttons, links, images) are visible and correctly displayed.
    Hover Effects: Verify that hover effects (e.g., tooltips, color changes) work as expected.
    Dynamic Content Loading: Check that content loads dynamically (e.g., AJAX calls) without page refresh.
    Session Timeout: Test that the session times out appropriately and redirects the user to the login page.
    Data Persistence: Ensure that user inputs are saved correctly (e.g., in forms, local storage).
    Image Loading: Verify that all images load correctly and are displayed as intended.
    Modal Pop-ups: Test that modal windows open and close correctly and do not obstruct the user experience.
    Pagination: Ensure pagination works correctly and navigates through pages of content.
    Search Functionality: Verify that the search bar returns relevant results based on user input.
    Sorting and Filtering: Test that sorting and filtering options work correctly on data tables.
    User Registration/Login: Validate the user registration and login processes.
    Profile Updates: Check that users can update their profile information successfully.
    Password Reset: Test the password reset functionality for usability and security.
    Notifications: Verify that notifications (success, error) appear correctly after actions.
    Browser Back Button: Ensure that the browser back button works as expected within the application.
    Loading Indicators: Check that loading indicators are displayed during long operations.
    Localization: Verify that the application supports multiple languages and formats.
    Keyboard Navigation: Ensure that users can navigate the application using keyboard shortcuts.
    Social Media Integration: Test social media sharing and login functionalities.
    Content Alignment: Check that text and images are properly aligned and formatted.
    Third-party Integrations: Verify that third-party services (e.g., payment gateways) work correctly.
    User Logout: Ensure that the logout functionality works and redirects the user appropriately.
    Color Contrast: Check that text color contrasts sufficiently with the background for readability.
    Font Consistency: Verify that fonts are consistent across different pages and components.
    Animation Performance: Test that animations run smoothly and do not hinder user experience.
    Sticky Elements: Ensure that sticky headers or footers behave correctly during scrolling.
    Breadcrumb Navigation: Verify that breadcrumb navigation reflects the correct page hierarchy.
    Content Overflow: Check how the application handles content overflow in containers (e.g., scrollbars).
    User Feedback Mechanism: Test the functionality of feedback forms or surveys.
    Custom Error Pages: Verify that custom error pages (e.g., 404, 500) are displayed correctly.
    Tooltips: Ensure that tooltips appear correctly when hovering over specific elements.
    Touch Gestures: Test touch gestures (e.g., swipe, pinch) for mobile devices.
    Input Field Focus: Verify that input fields receive focus correctly when navigating via keyboard.
    Progress Indicators: Check that progress indicators are displayed during long-running tasks.
    Content Localization: Ensure that the content is correctly localized for different regions.
    Font Size Adjustment: Test that users can adjust font sizes without breaking the layout.
    Print Functionality: Verify that the print view of a page is formatted correctly.
    Image Alt Text: Ensure that all images have appropriate alt text for accessibility.
    Session Persistence: Test that user sessions persist correctly across different tabs or windows.
    Dynamic Element Updates: Check that dynamic elements update correctly without full page reloads.
    Error Recovery: Verify that users can recover from errors (e.g., unsaved changes) gracefully.
    Multi-step Forms: Test the functionality and navigation of multi-step forms.
    Data Visualization: Ensure that graphs and charts render correctly and display accurate data.
    Keyboard Shortcuts: Verify that keyboard shortcuts function as expected throughout the application.
    User Onboarding: Test the onboarding process for new users to ensure it’s intuitive.
    Customizable Dashboards: Check that users can customize their dashboards or views as intended.
    Social Media Logins: Test the functionality of logging in via social media accounts.
    Content Editing: Verify that users can edit content in WYSIWYG editors correctly.
    File Download: Test the functionality of downloading files and that they are the correct format.
    Session Restore: Check that the application can restore a user's session after a crash or refresh.
    Multi-language Switching: Ensure that users can switch between languages seamlessly.
    Feedback Display: Verify that user feedback (like reviews or ratings) displays correctly.


Common Backend Tests for Web Applications

    API Response Time: Measure the time taken for API responses.
    Data Integrity: Verify that data is stored and retrieved accurately from the database.
    Authentication: Test user authentication processes (e.g., login, token generation).
    Authorization: Ensure that users have appropriate access to resources based on their roles.
    Error Handling: Check how the application handles errors (e.g., 404, 500 errors).
    Database Connection: Verify that the application can connect to the database successfully.
    Data Validation: Ensure that backend validation is performed on incoming data.
    Rate Limiting: Test that rate limiting is enforced on APIs to prevent abuse.
    Session Management: Verify that sessions are created, maintained, and expired correctly.
    Backup and Restore: Test the backup and restore functionality of the database.
    Load Testing: Measure how the application performs under heavy load.
    Security Testing: Check for vulnerabilities (e.g., SQL injection, XSS).
    Data Migration: Ensure that data migration processes work without data loss.
    Logging: Verify that important events are logged correctly for monitoring.
    Configuration Management: Test that configuration settings can be changed and applied correctly.
    Dependency Management: Ensure that all dependencies are correctly managed and updated.
    Email Functionality: Test the email sending functionality (e.g., notifications, password reset).
    Caching: Verify that caching mechanisms are working to improve performance.
    File Upload: Test file upload functionality for different file types and sizes.
    Data Export/Import: Ensure that data can be exported and imported correctly.
    API Versioning: Verify that versioning of APIs works
    API Contract Testing: Verify that the API adheres to the defined contract (e.g., OpenAPI specifications).
    Data Consistency: Ensure that data remains consistent across different database instances or replicas.
    Timeout Handling: Test how the application handles API timeouts and retries.
    Concurrency Handling: Verify that the application can handle multiple requests simultaneously without issues.
    Data Encryption: Check that sensitive data is encrypted both in transit and at rest.
    Backup Integrity: Validate that backups can be restored and that the data integrity is maintained.
    Rate Limiting Enforcement: Ensure that rate limiting is enforced and users receive appropriate error messages when limits are exceeded.
    Dependency Injection: Test that dependency injection is functioning correctly in the application.
    Configuration Validation: Verify that configuration files are read correctly and contain valid values.
    Third-party API Integration: Test interactions with third-party APIs to ensure they handle requests and responses correctly.
    Load Balancer Functionality: Check that the load balancer distributes requests evenly across servers.
    Session Data Storage: Verify that session data is stored correctly and can be retrieved as expected.
    Database Query Performance: Test the performance of critical database queries to ensure they execute within acceptable limits.
    Data Migration Validation: Ensure that data migrations (e.g., schema changes) are applied correctly without data loss.
    Event Logging: Verify that important events are logged correctly for auditing and monitoring purposes.
    API Security Testing: Test for common security vulnerabilities (e.g., CSRF, CORS).
    Asynchronous Processing: Check that background jobs or asynchronous processes complete successfully.
    Data Retention Policies: Verify that data retention policies are enforced correctly (e.g., deleting old records).
    Service Availability: Test that all services are available and responding as expected.
    Rate of Change: Measure how quickly data changes are reflected in the application.
    Fallback Mechanisms: Verify that fallback mechanisms work as intended in case of failures.
    Cross-Origin Resource Sharing (CORS): Test that CORS policies are configured correctly for APIs.
    API Versioning: Ensure that different versions of the API coexist and function correctly.
    User Role Management: Verify that user roles and permissions are managed correctly in the backend.
    Data Import/Export Functionality: Test the functionality for importing and exporting data to and from the application.
    Dependency Updates: Ensure that dependencies can be updated without breaking the application.
    Environment Configuration: Test that the application behaves correctly across different environments (development, staging, production).
    Service Health Checks: Implement and verify health checks for services to monitor their status.
    Resource Cleanup: Verify that temporary resources (e.g., files, sessions) are cleaned up appropriately after use.

**/
