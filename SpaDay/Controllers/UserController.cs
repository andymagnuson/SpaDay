using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpaDay.Models;

namespace SpaDay.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        public IActionResult Add()
        {
            return View();
        }
        [HttpPost("/user/add")]
        public IActionResult SubmitAddUserForm(User newUser, string verify)
        {
            if (newUser.Password == verify)
            {
                ViewBag.username = newUser.Username;
                return View("Index");
            }
            else
            {

                return View("Add");
            }
        }
    }
}
