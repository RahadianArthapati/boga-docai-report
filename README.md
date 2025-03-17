# DocAI Report

A web application for tracking and analyzing document processing accuracy and changes made by the AI system.

## Features

- View document processing history
- Track changes and corrections
- Filter by date range
- Color-coded change highlighting
- Responsive table layout

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- TailwindCSS
- TanStack Table
- date-fns

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd boga-docai-report
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_API_URL=https://alpha.boga.co.id/WebAPIAlpha/api
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components
- `/src/types` - TypeScript type definitions
- `/src/utils` - Utility functions

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[MIT](https://choosealicense.com/licenses/mit/)
