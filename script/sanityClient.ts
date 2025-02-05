// sanityClient.ts
import { createClient } from '@sanity/client';
// import dotenv from "dotenv"

// dotenv.config()
export const client = createClient({
  projectId: 'kw88qzs4', // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2025-01-21',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token:"skgXBAIty7z6znceQ561s2HU7YSooCAApT4pXDf7MaBGWPlFzMSXi0zKXleOqYOn01ZcvKEGtNjc9M8Ljjzq041TmCD2QiI8QDb76OP5SgwvSFZbCAudebBunt3MoMIoqvdiU0ztImITIQm2EC2zVWKITMjk9obJZwoHy5P6iNNlDOuqWxET",
});