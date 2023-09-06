const progress = document.getElementById( "progress" );
const prev = document.getElementById( "prev" );
const next = document.getElementById( "next" );
const circles = document.querySelectorAll( ".circle" );

let currnt = 1;

next.addEventListener( "click", () =>
{
  if ( currnt !== circles.length ) currnt++;
  update()
} );

prev.addEventListener( "click", () =>
{
  if ( currnt > 1 ) currnt--;
  update()
} );

function update ()
{
  circles.forEach( ( c,i ) =>
  {
    if ( i < currnt )
    {
      c.classList.add("active")
    } else
    {
      c.classList.remove("active")
    }
  } )
  progress.style.width = ( ( currnt - 1 ) / ( circles.length - 1 ) ) * 100 + "%"
  if ( currnt === 1 )
  {
    prev.disabled = true
  } else if ( currnt === 4 )
  {
    next.disabled = true
  } else
  {
    prev.disabled = false
    next.disabled = false
  }
}