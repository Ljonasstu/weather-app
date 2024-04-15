<script>
    	Function changeCity() {
    Let city = promt(“which city do you live in?”);
    	Let temperature = promt(“what temperature is it?”);
    	Let h1 = document.queryselector(“h1”);
    	H1.innerHTML = “Currently” +  temperature + city + “,

    Alert(“      ”);

  }

    	Let changeButton = document.queryselector(“changeCity”);

    	changeButton.addEventListener(“click”, changeCity)
</script>