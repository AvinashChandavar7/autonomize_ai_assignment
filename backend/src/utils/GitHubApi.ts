export const fetchGitHubUser = async (username: string): Promise<any> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch user ${username}`);
    }

    return await response.json();

  } catch (error) {
    console.error("Error fetching from GitHub API", error);
    throw error;
  }
};
