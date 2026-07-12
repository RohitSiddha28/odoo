# TransitOps Fleet Management System

TransitOps is a MERN-based fleet and transport operations dashboard. It includes a Node.js/Express API with MongoDB persistence, JWT authentication, role-based access control, and a React/Vite frontend connected to the backend APIs.

## Features

- JWT-based register and login APIs
- Role-based access control for fleet, safety, driver, and finance workflows
- API-connected dashboard metrics
- Vehicle listing, creation, editing, and deletion
- Driver, trip, fuel, expense, maintenance, dashboard, and report backend modules
- Operational report summary for vehicles, drivers, fuel cost, expenses, and total cost
- React Router pages for dashboard, vehicles, add/edit vehicle, reports, and not found states

## Tech Stack

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- CORS
- dotenv
- Nodemon

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- React Icons
- Fetch API

## Project Structure

```text
odoo/
  backend/
    config/
    constants/
    controllers/
    middleware/
    models/
    routes/
    .env.example
    package.json
    server.js
  frontend/
    public/
    src/
      components/
      layouts/
      pages/
      services/
    package.json
    vite.config.js
  readme.md
```

## Prerequisites

- Node.js
- npm
- MongoDB Atlas connection string or a local MongoDB server

## Backend Environment Variables

Create `backend/.env` from the example file.

PowerShell:

```powershell
cd backend
Copy-Item .env.example .env
```

Bash:

```bash
cd backend
cp .env.example .env
```

Configure:

```env
PORT=5000
DB_URL=your_mongodb_connection_url
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
```

## Frontend Environment Variables

The frontend defaults to:

```text
http://localhost:5000/api
```

Optionally create `frontend/.env` if the backend runs somewhere else:

```env
VITE_API_URL=http://localhost:5000/api
```

## Installation

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Running Locally

Start the backend:

```bash
cd backend
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## Available Scripts

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Authentication

The backend uses JWT bearer tokens.

Public auth endpoints:

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/register` | Register a user. Public registration creates a default `Driver` user. |
| POST | `/api/auth/login` | Login and receive a JWT token. |

Protected user creation:

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| POST | `/api/auth/users` | `FleetManager` | Create users with an assigned role. |

Login response includes a token. Frontend API calls read the token from `localStorage.token` or `localStorage.authToken` and send it as:

```http
Authorization: Bearer <token>
```

Example login payload:

```json
{
  "email": "manager@example.com",
  "password": "password123"
}
```

## Roles

Supported roles:

- `FleetManager`
- `Driver`
- `SafetyOfficer`
- `FinancialAnalyst`

RBAC summary:

| Area | Roles |
| --- | --- |
| Dashboard | `FleetManager`, `SafetyOfficer`, `FinancialAnalyst` |
| Vehicles read | `FleetManager`, `Driver`, `SafetyOfficer`, `FinancialAnalyst` |
| Vehicles create/delete | `FleetManager` |
| Vehicles update | `FleetManager`, `SafetyOfficer` |
| Drivers read/update | `FleetManager`, `SafetyOfficer` |
| Drivers create/delete | `FleetManager` |
| Trips create | `FleetManager` |
| Trips read | `FleetManager`, `Driver`, `SafetyOfficer` |
| Fuel create | `FleetManager`, `Driver` |
| Fuel read | `FleetManager`, `FinancialAnalyst` |
| Expenses create/read/update | `FleetManager`, `FinancialAnalyst` |
| Expenses delete | `FleetManager` |
| Maintenance create/read/update/close | `FleetManager`, `SafetyOfficer` |
| Maintenance read-only finance access | `FinancialAnalyst` |
| Maintenance delete | `FleetManager` |
| Reports | `FleetManager`, `FinancialAnalyst` |

## API Endpoints

Base backend URL:

```text
http://localhost:5000
```

### Health

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/health` | API health check |

### Dashboard

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/dashboard` | Get KPI metrics |

### Vehicles

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/vehicles` | Create a vehicle |
| GET | `/api/vehicles` | Get all vehicles |
| GET | `/api/vehicles/:id` | Get one vehicle |
| PUT | `/api/vehicles/:id` | Update a vehicle |
| DELETE | `/api/vehicles/:id` | Delete a vehicle |

### Drivers

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/drivers` | Create a driver |
| GET | `/api/drivers` | Get all drivers |
| GET | `/api/drivers/:id` | Get one driver |
| PUT | `/api/drivers/:id` | Update a driver |
| DELETE | `/api/drivers/:id` | Delete a driver |

### Trips

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/trips` | Create a trip |
| GET | `/api/trips` | Get all trips |

### Fuel

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/fuel` | Add a fuel log |
| GET | `/api/fuel` | Get fuel logs |

### Expenses

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/expenses` | Create an expense |
| GET | `/api/expenses` | Get all expenses |
| GET | `/api/expenses/:id` | Get one expense |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |

### Maintenance

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/maintenance` | Create a maintenance record |
| GET | `/api/maintenance` | Get all maintenance records |
| GET | `/api/maintenance/:id` | Get one maintenance record |
| PUT | `/api/maintenance/:id` | Update a maintenance record |
| PATCH | `/api/maintenance/:id/close` | Mark maintenance as completed |
| DELETE | `/api/maintenance/:id` | Delete a maintenance record |

### Reports

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/reports` | Get fleet operational summary |

## Example Vehicle Payload

```json
{
  "registrationNumber": "MH12AB1234",
  "vehicleName": "Tata Ace",
  "vehicleType": "Mini Truck",
  "maxLoadCapacity": 1200,
  "odometer": 45000,
  "acquisitionCost": 850000,
  "status": "AVAILABLE",
  "region": "Pune"
}
```

## Example Report Response

```json
{
  "success": true,
  "report": {
    "totalVehicles": 20,
    "availableVehicles": 14,
    "totalDrivers": 18,
    "activeTrips": 5,
    "totalFuelCost": 75000,
    "totalExpense": 32000,
    "totalOperationalCost": 107000
  }
}
```

## Frontend Pages

- `/` fetches dashboard and report summaries.
- `/vehicles` fetches vehicles and supports delete.
- `/vehicles/add` creates a vehicle.
- `/vehicles/edit/:id` fetches and updates a vehicle.
- `/reports` fetches operational report and vehicle summary data.

## Verification

Frontend checks:

```bash
cd frontend
npm run lint
npm run build
```

Backend syntax checks can be run with:

```bash
cd backend
node --check server.js
```

## Notes

- Protected API calls require a valid JWT in local storage under `token` or `authToken`.
- The current frontend does not include login/register pages yet.
- The frontend uses the browser Fetch API, not Axios.
- `CLIENT_URL` is defined for environment configuration, but CORS is currently enabled globally in the backend.

## License

This project is currently licensed under the ISC license as defined in the backend package metadata.
