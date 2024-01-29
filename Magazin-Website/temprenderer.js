const template = document.getElementById('MainNav');
var title = document.title;

if(title == `URBAN CANVAS`){
  template.innerHTML = `
  <nav class="mNav">
    <h1 id="webTitle"></h1>
    <input type="button" disabled value="Home" onclick="location.href = '../index.html' ">
    <input type="button" value="History" onclick="location.href = 'Themen/thHistory.html' ">
    <input type="button" value="Styles" onclick="location.href = 'Themen/thStyles.html' ">
    <input type="button" value="Locations" onclick="location.href = 'Themen/thLocations.html' ">
    <input type="button" value="Artists" onclick="location.href = 'Themen/thArtists.html' ">
    <input type="button" value="Teaser" onclick="location.href = 'Themen/thTeaser.html' ">
  </nav> `;
}
else
{
  template.innerHTML = `
  <nav class="mNav">
    <h1 id="webTitle"></h1>
    <input type="button" value="Home" onclick="location.href = '../index.html' ">
    <input type="button" value="History" onclick="location.href = 'thHistory.html' ">
    <input type="button" value="Styles" onclick="location.href = 'thStyles.html' ">
    <input type="button" value="Locations" onclick="location.href = 'thLocations.html' ">
    <input type="button" value="Artists" onclick="location.href = 'thArtists.html' ">
    <input type="button" value="Teaser" onclick="location.href = 'thTeaser.html' ">
  </nav> `;
}
  
  document.getElementById("webTitle").innerText = document.title;

  document.body.appendChild(template.content);