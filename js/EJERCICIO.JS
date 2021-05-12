for (i=1; i<=1; i=i+2){
    let card = `<div class="m-3 card" style="width: 30rem;">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Moon</td>
      <td>Luna</td>
      <td>@Monla</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Claus</td>
      <td>Clin</td>
      <td>@Clinlas</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Ted</td>
      <td>Tarr</td>
      <td>@Tedar</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td>Julian</td>
      <td>Jam</td>
      <td>@Jujam</td>
    </tr>
    <tr>
      <th scope="row">16</th>
      <td>Crown</td>
      <td>Cram</td>
      <td>@Badcrow</td>
    </tr>
    <tr>
      <th scope="row">18</th>
      <td>Tin</td>
      <td>Ten</td>
      <td>@TiTe</td>
    </tr>
    <tr>
      <th scope="row">20</th>
      <td>Blass</td>
      <td>Blese</td>
      <td>@Blasd</td>
    </tr>
    <tr>
      <th scope="row">22</th>
      <td>Padington</td>
      <td>Bear</td>
      <td>@thebear</td>
    </tr>
  </tbody>
</table>`
  document.getElementById("tabla-enumerada").innerHTML += card;
}