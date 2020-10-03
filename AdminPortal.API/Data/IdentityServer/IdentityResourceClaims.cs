﻿using System;
using System.Collections.Generic;

namespace AdminPortal.API.Data.IdentityServer
{
    public partial class IdentityResourceClaims
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public int IdentityResourceId { get; set; }

        public virtual IdentityResources IdentityResource { get; set; }
    }
}
