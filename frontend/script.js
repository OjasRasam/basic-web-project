document.getElementById("message-form").addEventListener("submit", async (e) => {
   e.preventDefault();
   const message = document.getElementById("message").value;

   const response = await fetch("https://storied-cannoli-9dde5c.netlify.app/message", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ message }),
   });

   const result = await response.json();
   document.getElementById("response").textContent = result.message;
});
