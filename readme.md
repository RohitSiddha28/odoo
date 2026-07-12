# TransitOps Fleet Management System

TransitOps is a MERN-based fleet and transport operations dashboard. It helps track vehicles, drivers, trips, fuel usage, expenses, maintenance activity, operational reports, and dashboard KPIs from a React frontend backed by an Express and MongoDB API.

## Features

- Fleet dashboard with vehicle, trip, driver, utilization, and report metrics
- Vehicle management with add, edit, list, update, and delete flows
- Driver, trip, fuel, expense, and maintenance API modules
- Maintenance closing workflow
- Operational report API for fleet count, driver count, fuel cost, expense cost, and total operational cost
- React Router based frontend pages for dashboard, vehicles, add/edit vehicle, reports, and not found states

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- React Icons
- Axios

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemon

## Project Structure

```text
odoo/
  backend/
    config/
    controllers/
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

Install these before running the project:

- Node.js
- npm
- MongoDB Atlas account or a local MongoDB server

## Environment Variables

Create a `.env` file inside the `backend` folder. You can copy the sample file:

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

Configure the values:

```env
PORT=5000
DB_URL=your_mongodb_connection_url
CLIENT_URL=http://localhost:5173
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

Note: the frontend code imports `axios`. If it is missing after install, add it with:

```bash
npm install axios
```

## Running the Application

Start the backend server:

```bash
cd backend
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

Start the frontend development server in another terminal:

```bash
cd frontend
npm run dev
```

The frontend usually runs on:

```text
http://localhost:5173
```

## Available Scripts

### Backend

```bash
npm run dev
```

Starts the Express API with Nodemon.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

## API Endpoints

Base backend URL:

```text
http://localhost:5000
```

### Health Check

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/health` | Check whether the API is running |

### Dashboard

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/dashboard` | Get dashboard KPI metrics |

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

## Current Development Notes

- The dashboard page currently contains placeholder frontend stats while backend dashboard metrics are available at `/api/dashboard`.
- Some frontend service methods reference report and vehicle helper endpoints that are not yet implemented in the backend.
- `axios` appears in frontend source files and package lock data, so ensure it is present in `frontend/package.json` before fresh installs or deployment.

## License

This project is currently licensed under the ISC license as defined in the backend package metadata.
