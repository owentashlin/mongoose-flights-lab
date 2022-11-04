badge container for tickets.ejs

<section id="badge-container">
    <% tickets.forEach(function(t) { %>
      <article class="badge"><%= t.seat %></article>
    <% }) %>
  </section>