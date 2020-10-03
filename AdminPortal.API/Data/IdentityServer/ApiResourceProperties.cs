using System;
using System.Collections.Generic;

namespace AdminPortal.API.Data.IdentityServer
{
    public partial class ApiResourceProperties
    {
        public int Id { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
        public int ApiResourceId { get; set; }

        public virtual ApiResources ApiResource { get; set; }
    }
}
