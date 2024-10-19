// src/services/jobCardService.js

let jobCards = []; // In-memory "database" for demo purposes
let id = 1; // Simulated ID for new job cards

export const getJobCards = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(jobCards), 500);
  });
};

export const createJobCard = async (jobCard) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newJobCard = { id: id++, ...jobCard };
      jobCards.push(newJobCard);
      resolve(newJobCard);
    }, 500);
  });
};

export const deleteJobCard = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      jobCards = jobCards.filter((jobCard) => jobCard.id !== id);
      resolve();
    }, 500);
  });
};
