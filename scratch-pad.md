badge container for tickets.ejs

<section id="badge-container">
    <% tickets.forEach(function(t) { %>
      <article class="badge"><%= t.seat %></article>
    <% }) %>
  </section>


let date = new Date()
let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()+1
let defaultDate = `${month}.${day}.${year}.`
