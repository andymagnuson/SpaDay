using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SpaDay.ViewModel
{
    public class AddUserViewModel
    {
        [Required(ErrorMessage ="Required")]
        [StringLength(15, MinimumLength = 5, ErrorMessage = "username must be between 5 and 15 long")]
        public string Username { get; set; }
         [EmailAddress]
        public string Email { get; set; } 
        
        [Required(ErrorMessage = "Required")]
        [StringLength(20, MinimumLength =6, ErrorMessage ="password must be between 6 and 20 characters long")]
        public string Password { get; set; }
       
        [Required(ErrorMessage = "Required")]
        [Compare("Email", ErrorMessage ="Passwords don't match!")]   
        public string VerifyPassword { get; set; }

    }
}
