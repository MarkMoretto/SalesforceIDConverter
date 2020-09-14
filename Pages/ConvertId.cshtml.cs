using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;

namespace SalesforceIDConverter.Pages {

    public class ConverterModel : PageModel {
        
        [BindProperty]
        [StringLength(15, ErrorMessage="String cannot exceed 15 characters.")]
        public string SFID { get; set; }
        
        public void OnGet() { }
        
        public void OnPost() {
            ViewData["confirmation"] = $"{SFID}";
        }
    }
}