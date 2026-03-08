# Public Assets

## How to Add Your Resume

1. Place your resume PDF file in this `/public` folder
2. Name it exactly: `resume.pdf`
3. The download button in the Hero section will automatically download it

Your resume will be available at: `/resume.pdf`

**Example:**
```
/public/resume.pdf  ← Place your PDF here
```

### Alternative: Use a Different Filename

If you want to use a different filename, update the path in `/src/app/components/Hero.tsx`:

```typescript
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/your-custom-filename.pdf'; // Change this
  link.download = 'Bhargav_Seelam_Resume.pdf'; // Downloaded filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```
