using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace ProCalc.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class HelloController : ControllerBase
    {
        // GET: api/values
        [AllowAnonymous]
        [HttpGet("DigaOi")]
        public IActionResult DigaOi()
        {
            return Ok(new { Nome = "Nicolas", Idade = 20 });
        }
    }
}

