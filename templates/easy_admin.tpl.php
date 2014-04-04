<?php

/**
 * @file
 * Default template for admin easy_admin.
 *
 */
?>
<div class="container">
<ul id="easy-admin" class="easy-admin-main">

	<li class="easy-admin-trigger">
	
		<i class="fa fa-bars"></i>
		
		<nav id="easy_admin-menu" class="<?php print $classes; ?> easy-admin-wrapper clearfix">
			<div class="gn-scroller">
				<ul class="gn-menu">
    				<li><i class="fa fa-coffee"></i>test</li>
    				<li><?php print render($easy_admin['easy_admin_menu']); ?></li>
    			</ul>
    		</div><!-- /gn-scroller -->
		</nav>

	</li><!-- /gn-trigger -->

	<li>
		<?php print render($easy_admin['easy_admin_home']); ?>
	</li>

    <li>
    	<?php print render($easy_admin['easy_admin_menu']); ?>
    </li>
    
    <li class="easy_admin-user">
    	<?php print render($easy_admin['easy_admin_user']); ?>
    </li>

</ul>
</div>
