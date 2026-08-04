const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");

try {
  const response = await fetch("./data/messages.json");

  if (!response.ok) {
    throw new Error(`Failed to load messages.json: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data.messages) || data.messages.length < 2) {
    throw new Error("messages.json must contain at least two messages");
  }

  title.textContent = data.messages[0];
  subtitle.textContent = data.messages[1];

  if (typeof data.title === "string") {
    document.title = data.title;
  }
} catch (error) {
  title.textContent = "Unable to load messages";
  subtitle.textContent = error.message;
  console.error(error);
}
