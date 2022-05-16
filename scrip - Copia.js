function verificar() { 
     var data = new Date() 
     var ano = data.getFullYear() 
     var fano = document.getElementById('txtano') 
     var res = document.getElementById('res')
     if (fano.value.length == 0 || Number (fano.value) > ano) { 
         window.alert('Erro! Verifique os dados e tente novamente!')
     } else{ 
        var fsex = document.getElementsByName("radiosex") 
        var idade = ano - Number(fano.value)  
        var genero = ''  
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){ 
             genero = "Homem" 
             if (idade >=0 && idade < 10){  
                 img.setAttribute('src', 'mankid.jpg')
                //criança
             } else if ( idade <21 ){  
                img.setAttribute('src', 'manyoung.jpg')
                //Jovem
             }else if (idade <50){  
                img.setAttribute('src', 'man.jpg')
                //adulto
             }else {   
                img.setAttribute('src', 'manold.jpg')
                //idoso
             
             }

        } else if (fsex[1].checked){ 
            genero = "Mulher"  
                if (idade >= 0 && idade< 10){  
                    img.setAttribute('src', 'womankid.jpg')
                   //criança
                } else if ( idade <21 ){  
                    img.setAttribute('src', 'womanyoung.jpg')
                   //Jovem
                }else if (idade <50){  
                    img.setAttribute('src', 'woman.jpg')
                   //adulto
                }else {   
                    img.setAttribute('src', 'womanold.jpg')
                   //idoso
   
                }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img) 
        img.style = 'center'
     } 
         
     

     

     
     
     
}