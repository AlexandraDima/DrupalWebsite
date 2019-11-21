<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/bootstrap_subtheme/templates/system/page.html.twig */
class __TwigTemplate_8bb2d620163e8567032dce406a2818599a357a9c24c245f113da5189e0e99133 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'navbar' => [$this, 'block_navbar'],
            'main' => [$this, 'block_main'],
            'header' => [$this, 'block_header'],
            'sidebar_first' => [$this, 'block_sidebar_first'],
            'highlighted' => [$this, 'block_highlighted'],
            'help' => [$this, 'block_help'],
            'content' => [$this, 'block_content'],
            'sidebar_second' => [$this, 'block_sidebar_second'],
            'footer' => [$this, 'block_footer'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 54, "if" => 56, "block" => 57];
        $filters = ["clean_class" => 62, "escape" => 65, "t" => 74];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'escape', 't'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 54
        $context["container"] = (($this->getAttribute($this->getAttribute(($context["theme"] ?? null), "settings", []), "fluid_container", [])) ? ("container-fluid") : ("container"));
        // line 56
        if (($this->getAttribute(($context["page"] ?? null), "navigation", []) || $this->getAttribute(($context["page"] ?? null), "navigation_collapsible", []))) {
            // line 57
            echo "  ";
            $this->displayBlock('navbar', $context, $blocks);
        }
        // line 96
        echo "
";
        // line 98
        $this->displayBlock('main', $context, $blocks);
        // line 171
        echo "
";
        // line 172
        if ($this->getAttribute(($context["page"] ?? null), "footer", [])) {
            // line 173
            echo "  ";
            $this->displayBlock('footer', $context, $blocks);
        }
    }

    // line 57
    public function block_navbar($context, array $blocks = [])
    {
        // line 58
        echo "    ";
        // line 59
        $context["navbar_classes"] = [0 => "navbar", 1 => (($this->getAttribute($this->getAttribute(        // line 61
($context["theme"] ?? null), "settings", []), "navbar_inverse", [])) ? ("navbar-inverse") : ("navbar-default")), 2 => (($this->getAttribute($this->getAttribute(        // line 62
($context["theme"] ?? null), "settings", []), "navbar_position", [])) ? (("navbar-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["theme"] ?? null), "settings", []), "navbar_position", []))))) : (($context["container"] ?? null)))];
        // line 65
        echo "    <header";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["navbar_attributes"] ?? null), "addClass", [0 => ($context["navbar_classes"] ?? null)], "method")), "html", null, true);
        echo " id=\"navbar\" role=\"banner\">
      ";
        // line 66
        if ( !$this->getAttribute(($context["navbar_attributes"] ?? null), "hasClass", [0 => ($context["container"] ?? null)], "method")) {
            // line 67
            echo "        <div class=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
            echo "\">
      ";
        }
        // line 69
        echo "      <div class=\"navbar-header\">
        ";
        // line 70
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "navigation", [])), "html", null, true);
        echo "
        ";
        // line 72
        echo "        ";
        if ($this->getAttribute(($context["page"] ?? null), "navigation_collapsible", [])) {
            // line 73
            echo "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">
            <span class=\"sr-only\">";
            // line 74
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Toggle navigation"));
            echo "</span>
            <span class=\"icon-bar\"></span>
            <span class=\"icon-bar\"></span>
            <span class=\"icon-bar\"></span>
          </button>
        ";
        }
        // line 80
        echo "      </div>

      ";
        // line 83
        echo "      ";
        if ($this->getAttribute(($context["page"] ?? null), "navigation_collapsible", [])) {
            // line 84
            echo "        <div id=\"navbar-collapse\" class=\"navbar-collapse collapse\">
          ";
            // line 85
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "navigation_collapsible", [])), "html", null, true);
            echo "
          
        </div>
      
      ";
        }
        // line 90
        echo "      ";
        if ( !$this->getAttribute(($context["navbar_attributes"] ?? null), "hasClass", [0 => ($context["container"] ?? null)], "method")) {
            // line 91
            echo "        </div>
      ";
        }
        // line 93
        echo "    </header>
  ";
    }

    // line 98
    public function block_main($context, array $blocks = [])
    {
        // line 99
        echo "  <div role=\"main\" class=\"main-container ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
        echo " js-quickedit-main-content\">
    <div class=\"row\">
        <div class=\"jumbotron text-center\">
          <h2 class=\"display-3\">Welcome to Ok in Dk website</h2>
          <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" href=\"#about\">Tell Me More</a>
          </div>


      ";
        // line 108
        echo "      ";
        if ($this->getAttribute(($context["page"] ?? null), "header", [])) {
            // line 109
            echo "        ";
            $this->displayBlock('header', $context, $blocks);
            // line 114
            echo "      ";
        }
        // line 115
        echo "
      ";
        // line 117
        echo "      ";
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", [])) {
            // line 118
            echo "        ";
            $this->displayBlock('sidebar_first', $context, $blocks);
            // line 123
            echo "      ";
        }
        // line 124
        echo "
      ";
        // line 126
        echo "      ";
        // line 127
        $context["content_classes"] = [0 => ((($this->getAttribute(        // line 128
($context["page"] ?? null), "sidebar_first", []) && $this->getAttribute(($context["page"] ?? null), "sidebar_second", []))) ? ("col-sm-6") : ("")), 1 => ((($this->getAttribute(        // line 129
($context["page"] ?? null), "sidebar_first", []) && twig_test_empty($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])))) ? ("col-sm-9") : ("")), 2 => ((($this->getAttribute(        // line 130
($context["page"] ?? null), "sidebar_second", []) && twig_test_empty($this->getAttribute(($context["page"] ?? null), "sidebar_first", [])))) ? ("col-sm-9") : ("")), 3 => (((twig_test_empty($this->getAttribute(        // line 131
($context["page"] ?? null), "sidebar_first", [])) && twig_test_empty($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])))) ? ("col-sm-12") : (""))];
        // line 134
        echo "      <section";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content_attributes"] ?? null), "addClass", [0 => ($context["content_classes"] ?? null)], "method")), "html", null, true);
        echo ">

        ";
        // line 137
        echo "        ";
        if ($this->getAttribute(($context["page"] ?? null), "highlighted", [])) {
            // line 138
            echo "          ";
            $this->displayBlock('highlighted', $context, $blocks);
            // line 141
            echo "        ";
        }
        // line 142
        echo "
        ";
        // line 144
        echo "        ";
        if ($this->getAttribute(($context["page"] ?? null), "help", [])) {
            // line 145
            echo "          ";
            $this->displayBlock('help', $context, $blocks);
            // line 148
            echo "        ";
        }
        // line 149
        echo "
        ";
        // line 151
        echo "        ";
        $this->displayBlock('content', $context, $blocks);
        // line 158
        echo "      </section>

      ";
        // line 161
        echo "      ";
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])) {
            // line 162
            echo "        ";
            $this->displayBlock('sidebar_second', $context, $blocks);
            // line 167
            echo "      ";
        }
        // line 168
        echo "    </div>
  </div>
";
    }

    // line 109
    public function block_header($context, array $blocks = [])
    {
        // line 110
        echo "          <div class=\"col-sm-12\" role=\"heading\">
            ";
        // line 111
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
        echo "
          </div>
        ";
    }

    // line 118
    public function block_sidebar_first($context, array $blocks = [])
    {
        // line 119
        echo "          <aside class=\"col-sm-3\" role=\"complementary\">
            ";
        // line 120
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar_first", [])), "html", null, true);
        echo "
          </aside>
        ";
    }

    // line 138
    public function block_highlighted($context, array $blocks = [])
    {
        // line 139
        echo "            <div class=\"highlighted\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
        echo "</div>
          ";
    }

    // line 145
    public function block_help($context, array $blocks = [])
    {
        // line 146
        echo "            ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "help", [])), "html", null, true);
        echo "
          ";
    }

    // line 151
    public function block_content($context, array $blocks = [])
    {
        // line 152
        echo "      
                <a id=\"main-content\"></a>
                ";
        // line 154
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "
               
          
        ";
    }

    // line 162
    public function block_sidebar_second($context, array $blocks = [])
    {
        // line 163
        echo "          <aside class=\"col-sm-3\" role=\"complementary\">
            ";
        // line 164
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])), "html", null, true);
        echo "
          </aside>
        ";
    }

    // line 173
    public function block_footer($context, array $blocks = [])
    {
        // line 174
        echo "    <footer class=\"footer ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
        echo "\" role=\"contentinfo\">
      ";
        // line 175
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer", [])), "html", null, true);
        echo "

     <div class=\"col-md-6\">
        ";
        // line 178
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_search", [])), "html", null, true);
        echo "
     </div>
       
  
    </footer>
  ";
    }

    public function getTemplateName()
    {
        return "themes/bootstrap_subtheme/templates/system/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  349 => 178,  343 => 175,  338 => 174,  335 => 173,  328 => 164,  325 => 163,  322 => 162,  314 => 154,  310 => 152,  307 => 151,  300 => 146,  297 => 145,  290 => 139,  287 => 138,  280 => 120,  277 => 119,  274 => 118,  267 => 111,  264 => 110,  261 => 109,  255 => 168,  252 => 167,  249 => 162,  246 => 161,  242 => 158,  239 => 151,  236 => 149,  233 => 148,  230 => 145,  227 => 144,  224 => 142,  221 => 141,  218 => 138,  215 => 137,  209 => 134,  207 => 131,  206 => 130,  205 => 129,  204 => 128,  203 => 127,  201 => 126,  198 => 124,  195 => 123,  192 => 118,  189 => 117,  186 => 115,  183 => 114,  180 => 109,  177 => 108,  165 => 99,  162 => 98,  157 => 93,  153 => 91,  150 => 90,  142 => 85,  139 => 84,  136 => 83,  132 => 80,  123 => 74,  120 => 73,  117 => 72,  113 => 70,  110 => 69,  104 => 67,  102 => 66,  97 => 65,  95 => 62,  94 => 61,  93 => 59,  91 => 58,  88 => 57,  82 => 173,  80 => 172,  77 => 171,  75 => 98,  72 => 96,  68 => 57,  66 => 56,  64 => 54,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation to display a single page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.html.twig template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - base_path: The base URL path of the Drupal installation. Will usually be
 *   \"/\" unless you have installed Drupal in a sub-directory.
 * - is_front: A flag indicating if the current page is the front page.
 * - logged_in: A flag indicating if the user is registered and signed in.
 * - is_admin: A flag indicating if the user has permission to access
 *   administration pages.
 *
 * Site identity:
 * - front_page: The URL of the front page. Use this instead of base_path when
 *   linking to the front page. This includes the language domain or prefix.
 *
 * Page content (in order of occurrence in the default page.html.twig):
 * - title_prefix: Additional output populated by modules, intended to be
 *   displayed in front of the main title tag that appears in the template.
 * - title: The page title, for use in the actual content.
 * - title_suffix: Additional output populated by modules, intended to be
 *   displayed after the main title tag that appears in the template.
 * - messages: Status and error messages. Should be displayed prominently.
 * - tabs: Tabs linking to any sub-pages beneath the current page (e.g., the
 *   view and edit tabs when displaying a node).
 * - node: Fully loaded node, if there is an automatically-loaded node
 *   associated with the page and the node ID is the second argument in the
 *   page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - page.header: Items for the header region.
 * - page.navigation: Items for the navigation region.
 * - page.navigation_collapsible: Items for the navigation (collapsible) region.
 * - page.highlighted: Items for the highlighted content region.
 * - page.help: Dynamic help text, mostly for admin pages.
 * - page.content: The main content of the current page.
 * - page.sidebar_first: Items for the first sidebar.
 * - page.sidebar_second: Items for the second sidebar.
 * - page.footer: Items for the footer region.
 *
 * @ingroup templates
 *
 * @see template_preprocess_page()
 * @see html.html.twig
 */
#}
{% set container = theme.settings.fluid_container ? 'container-fluid' : 'container' %}
{# Navbar #}
{% if page.navigation or page.navigation_collapsible %}
  {% block navbar %}
    {%
      set navbar_classes = [
        'navbar',
        theme.settings.navbar_inverse ? 'navbar-inverse' : 'navbar-default',
        theme.settings.navbar_position ? 'navbar-' ~ theme.settings.navbar_position|clean_class : container,
      ]
    %}
    <header{{ navbar_attributes.addClass(navbar_classes) }} id=\"navbar\" role=\"banner\">
      {% if not navbar_attributes.hasClass(container) %}
        <div class=\"{{ container }}\">
      {% endif %}
      <div class=\"navbar-header\">
        {{ page.navigation }}
        {# .btn-navbar is used as the toggle for collapsed navbar content #}
        {% if page.navigation_collapsible %}
          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">
            <span class=\"sr-only\">{{ 'Toggle navigation'|t }}</span>
            <span class=\"icon-bar\"></span>
            <span class=\"icon-bar\"></span>
            <span class=\"icon-bar\"></span>
          </button>
        {% endif %}
      </div>

      {# Navigation (collapsible) #}
      {% if page.navigation_collapsible %}
        <div id=\"navbar-collapse\" class=\"navbar-collapse collapse\">
          {{ page.navigation_collapsible }}
          
        </div>
      
      {% endif %}
      {% if not navbar_attributes.hasClass(container) %}
        </div>
      {% endif %}
    </header>
  {% endblock %}
{% endif %}

{# Main #}
{% block main %}
  <div role=\"main\" class=\"main-container {{ container }} js-quickedit-main-content\">
    <div class=\"row\">
        <div class=\"jumbotron text-center\">
          <h2 class=\"display-3\">Welcome to Ok in Dk website</h2>
          <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" href=\"#about\">Tell Me More</a>
          </div>


      {# Header #}
      {% if page.header %}
        {% block header %}
          <div class=\"col-sm-12\" role=\"heading\">
            {{ page.header }}
          </div>
        {% endblock %}
      {% endif %}

      {# Sidebar First #}
      {% if page.sidebar_first %}
        {% block sidebar_first %}
          <aside class=\"col-sm-3\" role=\"complementary\">
            {{ page.sidebar_first }}
          </aside>
        {% endblock %}
      {% endif %}

      {# Content #}
      {%
        set content_classes = [
          page.sidebar_first and page.sidebar_second ? 'col-sm-6',
          page.sidebar_first and page.sidebar_second is empty ? 'col-sm-9',
          page.sidebar_second and page.sidebar_first is empty ? 'col-sm-9',
          page.sidebar_first is empty and page.sidebar_second is empty ? 'col-sm-12'
        ]
      %}
      <section{{ content_attributes.addClass(content_classes) }}>

        {# Highlighted #}
        {% if page.highlighted %}
          {% block highlighted %}
            <div class=\"highlighted\">{{ page.highlighted }}</div>
          {% endblock %}
        {% endif %}

        {# Help #}
        {% if page.help %}
          {% block help %}
            {{ page.help }}
          {% endblock %}
        {% endif %}

        {# Content #}
        {% block content %}
      
                <a id=\"main-content\"></a>
                {{ page.content }}
               
          
        {% endblock %}
      </section>

      {# Sidebar Second #}
      {% if page.sidebar_second %}
        {% block sidebar_second %}
          <aside class=\"col-sm-3\" role=\"complementary\">
            {{ page.sidebar_second }}
          </aside>
        {% endblock %}
      {% endif %}
    </div>
  </div>
{% endblock %}

{% if page.footer %}
  {% block footer %}
    <footer class=\"footer {{ container }}\" role=\"contentinfo\">
      {{ page.footer }}

     <div class=\"col-md-6\">
        {{ page.footer_search }}
     </div>
       
  
    </footer>
  {% endblock %}
{% endif %}
", "themes/bootstrap_subtheme/templates/system/page.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\themes\\bootstrap_subtheme\\templates\\system\\page.html.twig");
    }
}
