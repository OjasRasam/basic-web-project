document.getElementById("message-form").addEventListener("submit", async (e) => {
   e.preventDefault();
   const message = document.getElementById("message").value;

   const response = await fetch("http://localhost:3000/message", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ message }),
   });

   const result = await response.json();
   document.getElementById("response").textContent = result.message;
});
