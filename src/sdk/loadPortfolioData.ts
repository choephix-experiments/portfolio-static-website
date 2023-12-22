// loadPortfolioData.js
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { convertKeysToCamelCase } from './convertKeysToCamelCase';

export async function loadPortfolioData() {
  const filePath = path.join(process.cwd(), 'content', 'portfolio.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents);
  return convertKeysToCamelCase(data); // Convert keys to camelCase
}
