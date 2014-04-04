<?php

/**
 * @file
 * Default template for admin easy_admin.
 *
 */
?>
<div class="container">
<ul id="gn-menu" class="gn-menu-main">

	<li class="gn-trigger">
	
		<i class="fa fa-bars"></i>
		
		<nav id="easy_admin" class="<?php print $classes; ?> gn-menu-wrapper clearfix">
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
    	<?php print render($easy_admin['easy_admin_user']); ?>
    </li>

    <li>
    	<?php print render($easy_admin['easy_admin_menu']); ?>
    </li>

</ul>
</div>
