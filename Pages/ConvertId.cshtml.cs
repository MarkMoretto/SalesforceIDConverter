using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace SalesforceIDConverter.Pages {
    public class ConverterModel : PageModel {

        [BindProperty]
        public string SFID { get; set; }
        
        public void OnGet() { }
        
        public void OnPost() {
            ViewData["confirmation"] = $"{SFID}";
        }
    }
}