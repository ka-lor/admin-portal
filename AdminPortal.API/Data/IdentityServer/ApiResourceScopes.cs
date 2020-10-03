using System;
using System.Collections.Generic;

namespace AdminPortal.API.Data.IdentityServer
{
    public partial class ApiResourceScopes
    {
        public int Id { get; set; }
        public string Scope { get; set; }
        public int ApiResourceId { get; set; }

        public virtual ApiResources ApiResource { get; set; }
    }
}
