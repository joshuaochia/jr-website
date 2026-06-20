# Claude Instructions for JR Portfolio

This project is a static portfolio website for an estimator freelancer / online worker. The website is a simple static landing page showcasing estimate portfolio work, sample cost estimates, and quantity takeoff visuals. The source data is in `public/assets`.

## Project Intent

- Build a static-only portfolio site for a freelance estimator or virtual assistant focused on construction estimating and quantity takeoff work.
- Use the existing Next.js 16 app router and Tailwind CSS setup.
- Do not add server APIs or dynamic data fetching. Keep the site static and portfolio-focused.

## Assets to Use

- `public/assets/Julito Ochia Updated Cost Estimator Portfolio 2026.pdf`
- `public/assets/ganchart_and_sample_estimate/Ganchart and sample estimates/*.jpeg`
- `public/assets/Quantity_takeoff/Quantity take off using Bluebeam and zztakeoff/*.jpeg`

## Design Guidance

- Follow the visual style and layout suggested by the PDF and sample images.
- Present the portfolio as a professional estimate / quantity surveyor offering services such as:
  - Cost estimation
  - Quantity takeoff
  - Gantt chart and schedule planning
  - Structural and roofing cost breakdowns
- Use the PDF and images as the primary source of truth for copy and section structure.

## Page Structure

1. Hero section
   - Title with the freelancer/estimator service context
   - Short description of portfolio, cost estimating, and online support
   - Call-to-action to view work or contact
2. About / Services
   - Explain who the freelancer is and what estimating services are offered
   - Mention construction estimating, quantity takeoff, Bluebeam, zztakeoff, and schedule support
3. Portfolio / Sample work
   - Show sample estimate pages and visuals from the PDF images
   - Include a short caption for each sample image
4. Process / Methodology
   - Outline the static portfolio workflow: review drawings, prepare takeoff, assemble cost estimate, produce schedule visuals
5. Contact / Next step
   - Provide a simple contact prompt for hiring or requesting a quote

## Implementation Notes

- Use `app/page.tsx` as the main page.
- Use `app/layout.tsx` for metadata and global structure.
- Keep the site lightweight and visually clean.
- Use the available images directly from `public/assets`.
- Ensure the page is suitable for a freelancer portfolio and positions the work clearly.

## Claude Behavior

- Read the PDF and the sample asset images to understand the design and content.
- Translate the portfolio content into a static website layout.
- If you need to write code, update the Next.js app files accordingly and keep the output concise.
