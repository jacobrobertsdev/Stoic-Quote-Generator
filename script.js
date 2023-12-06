const quoteText = document.querySelector(".quote-text");
const generateQuoteButton = document.querySelector(".generate-quote");
const authorName = document.querySelector(".author-name");

// Fetch the random quote, catch any errors

async function newQuote() {
  try {
    const response = await fetch("https://stoic-quotes.com/api/quote");
    const data = await response.json();
    quoteText.textContent = `"${data.text}"`;
    authorName.textContent = `- ${data.author}`;
    if (!response.ok) {
      throw new Error();
    }
  } catch (error) {
    quoteText.textContent = `There was a server error. Error message: ${error.message}`;
  }
}

// Generate quote on load

newQuote();

// Event listener for refresh button
generateQuoteButton.addEventListener("click", newQuote);
