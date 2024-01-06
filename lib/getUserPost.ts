export default async function getUserPost(userId: string) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
  
    if (!response.ok) throw new Error("Failed to fetch the User posts...");
    return response.json();
  }
  