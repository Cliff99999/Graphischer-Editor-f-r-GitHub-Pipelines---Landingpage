

<script>
    export let serviceData = {};
    const { HEADING, ALL_SERVICES, SERVICE_LIST } = serviceData;
  </script>
  

  <section id="services" class="section">
    <div class="container text-center">
      <h2 class="title">{HEADING}</h2>
      <div class="row section-body">
        {#each SERVICE_LIST as list}
          <div class="col-md-4 service">
            <img src={list.URL} alt={list.LABEL} class="service-img" />
            <h4>{list.LABEL}</h4>
            <p>{list.DESCRIPTION}</p>
          </div>
        {/each}
      </div>
      <buttom class="btn btn-primary round-border main-bgcolor">
        {ALL_SERVICES}
      </buttom>
    </div>
  </section>
 
  <style>
    .service-img {
      width: 200px;
      height: 200px;
      margin-top: 20px;
      text-align: center;
      align-content: center;
      display:block;
      margin-left: auto;
      margin-right: auto;
    }

  
    .service h4 {
      padding: 5px;
      margin-top: 25px;
      margin-left: 25px;
      text-transform: uppercase;
      text-align: center;
      
    }
  
    .title {
      text-transform: uppercase;
      text-align: center;
    }
  
    .title::before {
      content: "";
      background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
      height: 5px;
      width: 200px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      transform: translateY(60px);
      text-align: center;
    }
  
    .title::after {
      content: "";
      background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
      height: 10px;
      width: 50px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
      display: block;
      transform: translateY(14px);
      text-align: center;
    }
  
    section .btn-primary {
      box-shadow: none;
      padding: 8px 25px;
      border: none;
      text-align: center;
    }

    p {text-align: center;}

  </style>