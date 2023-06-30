function openShareModal() {
    var modal = document.getElementById("shareModal");
    modal.style.display = "block";
  }
  
  function closeShareModal() {
    var modal = document.getElementById("shareModal");
    modal.style.display = "none";
  }
  
  function share() {
    var shareInput = document.getElementById("shareInput");
    var content = shareInput.value;
    
    // Replace the following code with your actual share functionality
    // For example, you can use a library or an API to handle the sharing
    alert("Sharing content: " + content);
  }